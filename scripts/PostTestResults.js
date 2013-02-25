/***************************************************************************

    PostTestResults.js

    This is the client-side script used to enable logging data remotely.
    Typically this script would be called by a widget that is running test
    cases where test results must be stored.  It uses Asynchronous Javascript
    And XML (AJAX) methods to send data between client and server.  The steps
    listed below illustrate the minimum requirements to enable remote logging,
    each shown with an example.

    1) Write a server-side script that will log the data you send:

            <?php
                $handle = fopen("mylog.txt", "a");
                if($handle === false) exit("Cannot open mylog.txt");
                foreach ($_POST as $key => $value) {
                    if(fwrite($handle,$key."=".$value."\r\n") === false)
                        exit("Cannot write to mylog.txt");
                }
                fclose($handle);
                exit("mylog.txt updated");
            ?>

    2) Include this file in    your HTML mark-up:

            <script type="text/javascript" src="PostTestResults.js">

    3) Set the location of your server script:

            serverURL = 'http://www.myserver.com/myscript.php';

    4) Send the data you wish to log:

            if(!postResults('Hello, world!') == false) alert('Error!');

    Notes:

    -> The serverURL must be set before calling the postResults function.

    -> The client can optionally choose to set a callback function if there
            is a need to process any server messages.  To do so, simply set
            clientCallback to a string that contains the call syntax, such as:

                    clientCallback = 'myFunction(myParam)';

    -> sendAsynchronously should usually be left as 'true'.  It refers to
            the Asynchronous in AJAX.  If more than one call will be made to
            postResults at a time (while looping through the elements of a form,
            for example), then set this value to 'false' to keep each call from
            trampling/congestion/override over the previous one.  While this ensures that all of the
            data gets logged, it does impact responsiveness on the client side.

            Alternately, all of the data that needs to be logged can be rolled
            into a single call, using a format similar to a query string:

                    <item1>=<value1>[&<item2>=<value2>[...]]

            For example, a query string can be composed of two text boxes:

                    firstPart = 'FirstName=" + getElementById('text1').value;
                    nextPart = 'LastName=" + getElementById('text2').value;
                    if(!postResults(firstPart + '&' + nextPart)) alert('Error!');

            Note that each element must have an identifier, followed by an equal
            sign, then followed by the value.  Each identifier=value pair must
            be separated by an ampersand.

    -> The httpRequest object should not be modified by the client.

    -> serverResponse contains any message returned from the server.

    -> serverError holds a description of the latest error, should one occur.

    -> debugMode bypasses all of the server logging and instead uses alert
            statements to display data that would normally be logged; no AJAX
            commands will be executed.

                Usage: debugMode = true;

    -> Setting traceMode to true will record each step executed in this
            script until it is set to false again.  The contents of the trace are
            stored in traceContents, which can be displayed, cleared, etc. by the
            client.

                Usage: traceMode = true;

            To display the trace in the client, load it into any HTML item; e.g.:

                getElementById('myTraceTextarea').innerHTML = traceContents;

***************************************************************************/

    var clientCallback = '';
    var debugMode = false;
    var httpRequest = false;
    var sendAsynchronously = false;
    var serverError = '';
    var serverReadyState = '';
    var serverResponse = '';
    var serverStatus = '';
    var serverURL = 'resources/Logtestresults.php';  /* To be modified before deployment onto the production.  */
    var traceCallback = '';
    var traceContents = '';
    var traceCount = 0;
    var traceMode = false;    /* Trace mode of the script has been activated to retain log information in browser cache. */
	var testCaseResult = ''; /* Individual testcase result */
	

/** These variables are used as constants *********************************/

    var ALERT_HEADER = 'HTTP Request:';
    var CONTENT_HEADER = 'Content-Type';
    var CONTENT_TYPE = 'application/x-www-form-urlencoded';
    var DEFAULT_DATA_HEADER = '_POST_TEST_RESULTS';
    var ERROR_CALLBACK = 'ERROR: Cannot set callback ';
    var ERROR_CALLBACK_FAILURE = 'ERROR: Cannot execute callback ';
    var ERROR_CANT_DO_AJAX = 'ERROR: Cannot create an XMLHTTP object';
    var ERROR_CANT_SEND = 'ERROR: Cannot execute AJAX send';
    var ERROR_NO_READY_STATE = 'ERROR: Cannot get serverReadyState';
    var ERROR_NO_RESPONSE = 'ERROR: Cannot get serverResponse';
    var ERROR_NO_STATUS = 'ERROR: Cannot get serverStatus';
    var ERROR_NO_URL_SET = 'ERROR: serverURL must be set before calling postResults';
    var ERROR_PRIVILEGE = 'ERROR: UniversalBrowserRead permission denied';
    var ERROR_REQ_HEADER = 'ERROR: Cannot set request header';
    var LINK_METHOD = 'POST';
    var MIME_TYPE = 'text/xml';
    var MS_NEW_OBJECT = 'Msxml2.XMLHTTP';
    var MS_OLD_OBJECT = 'Microsoft.XMLHTTP';
    var PRIVILEGE_TYPE = 'UniversalBrowserRead';
    var READY_STATE_COMPLETE = 4;
    var SERVER_STATUS_OK = 200;

    var READY_STATE_DESC = new Array(
        '0 - Uninitialized',
        '1 - Loading',
        '2 - Loaded',
        '3 - Interactive',
        '4 - Complete');

    var TRACE_ADD_HEADER = 'Adding default header to data';
    var TRACE_CREATE_OBJECT = 'Creating HTTP Request object';
    var TRACE_DEBUG_ALERT = 'Debug mode - using alert instead of HTTP send';
    var TRACE_PERMISSIONS = 'Enabling security privaleges';
    var TRACE_EVAL_CALLBACK = 'Executing user callback: ';
    var TRACE_FOUND_IE = 'IE browser found';
    var TRACE_FOUND_MOZILLA = 'Mozilla browser found';
    var TRACE_FUNCTION_BEGIN = 'Begin Function postResults';
    var TRACE_FUNCTION_END = 'End Function postResults';
    var TRACE_LABEL_CALLBACK = '   clientCallback:     ';
    var TRACE_LABEL_DEBUG = '   debugMode:          ';
    var TRACE_LABEL_ASYNCH = '   sendAsynchronously: ';
    var TRACE_LABEL_RESPONSE = '   serverResponse:     ';
    var TRACE_LABEL_URL = '   serverURL:          ';
    var TRACE_LABEL_POST = '   dataToPost:         ';
    var TRACE_OPEN_LINK = 'Opening link using ';
    var TRACE_READY_STATE = 'HTTP ready state: ';
    var TRACE_RETURN_FALSE = 'Returning false from';
    var TRACE_RETURN_TRUE = 'Returning true from';
    var TRACE_SEND_REQUEST = 'Sending HTTP request';
    var TRACE_SERVER_RESPONSE = 'Server response: ';
    var TRACE_SET_CALLBACK = 'Setting callback function';
    var TRACE_SET_CONTENT = 'Setting Content-Type to: ';
    var TRACE_START_ACTIVEX = 'Starting ActiveX object ';
    var TRACE_STARTED = '      Trace started on ';
    var TRACE_STARTED_LINE = '      -----------------------------------------';
	
	function individualCaseResult(msg)
	{
		try
		{
			summarizedResult = summarizedResult+'\r\t'+msg;
			
		}
		catch(servLogExcep)
		{
			console.log('\t| Error: '+servLogExcep+"\t\t|");
		}
	}

function postResults(dataToPost) {

/** When in trace mode, dump a subset of the variables ********************/

    var traceFunctionName = String(arguments.callee).split("{",1)[0];

    traceLog('');
    traceLog(TRACE_FUNCTION_BEGIN);
    traceLog(TRACE_LABEL_CALLBACK + clientCallback);
    traceLog(TRACE_LABEL_DEBUG + debugMode);
    traceLog(TRACE_LABEL_ASYNCH + sendAsynchronously);
    traceLog(TRACE_LABEL_RESPONSE + serverResponse);
    traceLog(TRACE_LABEL_URL + serverURL);
    traceLog(TRACE_LABEL_POST + dataToPost);

/** Don't even begin the process if the server URL has not been set *******/

    if (serverURL == false) {
        serverError = ERROR_NO_URL_SET;
        traceLog(ERROR_NO_URL_SET);
        return false;
    }

/** If the string is not formatted correctly, force it.  When the server **/
/** sees this default header, it will be removed when the data is logged **/

    if (dataToPost.indexOf('=') == -1) {
        traceLog(TRACE_ADD_HEADER);
        dataToPost = DEFAULT_DATA_HEADER + '=' + dataToPost;
    }

/** Mozilla needs to be told to allow cross-domain scripting.  We need ****/
/** to test netscape.security this way for Safari compatibility. **********/

    try {
        var netscapeTest = netscape.security;
    } catch (err) {
        netscapeTest = null;
    }

    if (netscapeTest != null) {
        traceLog(TRACE_PERMISSIONS);

        try {
            netscape.security.PrivilegeManager.enablePrivilege(PRIVILEGE_TYPE);
        } catch (err) {
            serverError = err;
            traceLog(ERROR_PRIVILEGE);
            traceLog(err.description);
            traceLog(TRACE_RETURN_FALSE + traceFunctionName);
            return false;
         }
    }

/** Set up the communications based on the browser type *******************/

    if (!httpRequest) {
        traceLog(TRACE_CREATE_OBJECT);
        if (window.XMLHttpRequest) {

/** We've found a Mozilla-type browser ************************************/

            traceLog(TRACE_FOUND_MOZILLA);
            httpRequest = new XMLHttpRequest();

            if (httpRequest.overrideMimeType) {
                httpRequest.overrideMimeType(MIME_TYPE);
                }
        } else if (window.ActiveXObject) {

/** If this is IE, try to create the newest object version first **********/

            traceLog(TRACE_FOUND_IE);

            try {
                traceLog(TRACE_START_ACTIVEX + MS_NEW_OBJECT);
                httpRequest = new ActiveXObject(MS_NEW_OBJECT);
            } catch (err) {
                try {
                    traceLog(TRACE_START_ACTIVEX + MS_OLD_OBJECT);
                    httpRequest = new ActiveXObject(MS_OLD_OBJECT);
                } catch (err) {
                    serverError = err;
                    traceLog(ERROR_CANT_DO_AJAX);
                    traceLog(err.description);
                    traceLog(TRACE_RETURN_FALSE + traceFunctionName);
                    return false;
                }
            }
        }
    }

/** Quit here if the request failed ***************************************/

    if (!httpRequest) {
        serverError = ERROR_CANT_DO_AJAX;
        traceLog(ERROR_CANT_DO_AJAX);
        traceLog(TRACE_RETURN_FALSE + traceFunctionName);
        return false;
    }

/** Bypass all of the AJAX commands if we are in debug mode ***************/

    if (debugMode) {
        traceLog(TRACE_DEBUG_ALERT);
        alert(ALERT_HEADER + '\n' + dataToPost);
    }
    else {

/** Open the link *********************************************************/

        traceLog(TRACE_OPEN_LINK + LINK_METHOD);

        try {
            httpRequest.open(LINK_METHOD, serverURL, sendAsynchronously);
        } catch(err) {
                serverError = err;
                traceLog(ERROR_PRIVILEGE);
                traceLog(err.description);
                traceLog(TRACE_RETURN_FALSE + traceFunctionName);
                return false;
        }

/** Set up a callback that the server will use to send us the results *****/

        traceLog(TRACE_SET_CALLBACK);

        try {
            httpRequest.onreadystatechange = postResultsCallback;
        } catch(err) {
            serverError = err;
            traceLog(ERROR_CALLBACK + postResultsCallback);
            traceLog(err.description);
            traceLog(TRACE_RETURN_FALSE + traceFunctionName);
            return false;
        }

/** This content type works for text-based data ***************************/

        traceLog(TRACE_SET_CONTENT + CONTENT_TYPE);

        try {
            httpRequest.setRequestHeader(CONTENT_HEADER, CONTENT_TYPE);
        } catch(err) {
            serverError = err;
            traceLog(ERROR_REQ_HEADER);
            traceLog(err.description);
            traceLog(TRACE_RETURN_FALSE + traceFunctionName);
            return false;
        }

/** Now go ahead and send the data that we want to log ********************/

        traceLog(TRACE_SEND_REQUEST);

        try {
            httpRequest.send(encodeURI(dataToPost));
        } catch(err) {
            serverError = err;
            traceLog(ERROR_CANT_SEND);
            traceLog(err.description);
            traceLog(TRACE_RETURN_FALSE + traceFunctionName);
            return false;
        }
    }

    traceLog(TRACE_RETURN_TRUE + traceFunctionName);
    return true;
}

function postResultsCallback() {

    var traceFunctionName = String(arguments.callee).split("{",1)[0];

/** Do not call this function directly; let the server do it **************/

    if (debugMode) {

/** When in debug mode, simply execute the callback (if any) and leave ****/

        traceLog(TRACE_EVAL_CALLBACK + clientCallback);
        if (clientCallback.length) eval(clientCallback);
        traceLog(TRACE_RETURN_TRUE + traceFunctionName);
        return true;
    }

    try {
         serverReadyState = httpRequest.readyState;
     } catch(err) {}

    try {
         serverResponse = httpRequest.responseText;
     } catch(err) {}

    try {
      serverStatus = httpRequest.status;
     } catch(err) {}

    if((serverReadyState > -1) && (serverReadyState > -1)) {
        traceLog(TRACE_READY_STATE + READY_STATE_DESC[serverReadyState]);
    }

    if (serverReadyState == READY_STATE_COMPLETE) {
        traceLog(TRACE_SERVER_RESPONSE + serverResponse);

/** If the client has set up a callback, go ahead and execute it **********/

        traceLog(TRACE_EVAL_CALLBACK + clientCallback);
        if (clientCallback.length) {
            try {
              eval(clientCallback);
            } catch(err) {
                serverError = err;
                traceLog(ERROR_CALLBACK_FAILURE + clientCallback);
                traceLog(err.description);
                traceLog(TRACE_RETURN_FALSE + traceFunctionName);
                return false;
            }
        }
    }

/** If all goes well, return 'true'; otherwise, return 'false' ************/

    if (serverStatus == SERVER_STATUS_OK) {
        traceLog(TRACE_RETURN_TRUE + traceFunctionName);
        return true;
    }
    else {
        traceLog(TRACE_RETURN_FALSE + traceFunctionName);
        return false;
    }
}

function traceLog(traceData) {

/** This routine just appends any trace data into traceContent ************/
/** NOTE: Errors are ignored in this routine ******************************/

	
	
    if (!traceMode) return;

    if (traceData == '') {
        if (traceContents.length) traceContents += '\n';
        traceContents += TRACE_STARTED +
            Date().substring(0,25).replace(/,/g, '') + '\n' +
            TRACE_STARTED_LINE + '\n';
    }
    else {
        ctr = ++traceCount + '   ';
        if (ctr.length < 5) ctr = ' ' + ctr;
        if (ctr.length < 6) ctr = ' ' + ctr;
        traceContents += ctr + traceData.replace(/\n/g, ' ') + '\n';
    }

/** The client can opt to have a function called to do something here *****/
	console.log('\t||'+traceCount+'\t||'+traceData+'\t||'+traceContents+'\t||');
	
	
    if (traceCallback != '') eval(traceCallback);
}

function traceClear() {

/** Clears all trace statements and resets the line counter ***************/

    traceContents = '';
    traceCount = 0;

/** The client can opt to have a function called to do something here *****/

    if (traceCallback != '') eval(traceCallback);
}

function awaitServerResponse()
{
    /*	Should use the following references for populating 'respDetails' in client HTML Page. 
	 *  Incase such ID is not existing or inaccessible then create a div and assign it the ID 'respDetails'.
	 *			serverError
     *			serverReadyState
     *			serverResponse
     *			serverStatus
	 * 
	 * 
	 * 
	 **/
	
	var uiRef=undefined;
	try
	{
		uiRef = document.getElementById('respDetails');
	}
	catch(anyError)
	{
		uiRef = document.createElement('div');
		uiRet.setAttribute('id','respDetails');
		document.lastChild.attachNode(uiRef);
	}
	finally
	{
		document.innerHTML+='<br><hr><br>Server response could not be populated due to an unknown error. But, the log at server begun/queued.';
	}
}
