Client:
======
1. HTML document's header should have "PostTestResults.js" included.
2. To send a log entry, just use the following javascript code.

	serverURL = "/resources/Logtestresults.php";
	traceLog(LOG_MESSAGE_IN_STRING_FORMAT);

Test Driver:
===========
1. Should have PostTestResults.js in header.
2. Update array with the testcases document references/



Server:
=======
1. Ensure the server has LAMP/WAMP bundle installed.
2. Shutdown all the services of WAMP/LAMP, and put it offlline.
3. Setup folders.
	3.1	For your information, all the web-applications are usually kept under the "/wamp/www/" directory. It is usually referred to as the root-directory of web-pages.
	3.2	A number of web-applications can run on the same server. Hence, it is a recommended practice to create a new-directory inside the root, for which the directory path is required to be pre-fixed to serverURL.
	3.3	Test-suite is now at "/wamp/www/GCF/". 
4. Copy 'Logtestresults.php' into the the web application's "/resource" folder. 



====================================================
Bulk logging details
=====================================================


This is the logic followed to post test results atonce for serverlogging. 

List of files affected
======================
1.	TestScripts.js
2.	TestDriver.js
3.	PostTestResults.js
4.	AutomatedTestCaseTemplate.html 
	(Based on which the files Test_01.html, Test_02.html, Test_03.html, Test_04.html are derived for demo purpose only.)

In PostTestResults.js a new javascript function named “individualCaseResult(msg)” has been declared and defined. A global variable named “summarizedResult” has been declared, which the function individualCaseResult(msg) calls to update the cache of testsuite Results.

Test_01.html, Test_02.html … Test_04.html cases call the function logResult(msg), present in TestScripts.js to send individual test results.
logResult(msg) inturn formats the messages from the individual-cases into this format
	TestCaseID	<tab>	Result	<tab> Message <newine>

logResult(msg), sends this formatted-message to individualCaseResult(msg), explained above. 

In PostTestResults.js, the “individualCaseResult(msg)”, upon receiving each message, appends it to a variable named “summarizedResult” that is accessible in global context, with new line.

TestDriver.html, finally calls “postResults(summarizedResult)”, upon completion of tests  in the array.  Hence, the entire testsuite result atonce is sent, instead of sending individual results each time, to post atonce.

AutomatedCaseIndividualTemplate.html ? To be used to map existing manual case into automated one.
TestDriver.html ? Initiates testsuite execution, and responsible for posting the summarized results.
Testscripts.js ? Takes care of sending indivudal testcase result to test-driver.
PostTestResults.js ? Takes care of sending summarized result to the server.

No PHP file changes have been done, and is left intact. Only PostTestResults.js, has two new members included as described above. Please find attached archive  for code (Passsword: nokia).



