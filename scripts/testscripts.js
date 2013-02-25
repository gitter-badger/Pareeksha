/* <!-- Test runs upon loading this page, and ensures to log result before closing 
* 
* Ensure to alter "testpageURL" in the parent of every test.
* 
* 
* --> 
* */

window.onload = startTesting;
//window.onunload = logResult;

var parent, testelement, testResult = true;


function logResult(tid, tr, tm) {
    trformat = "";
    if (tr) {
        trformat = "\t" + tid + "\t\tPASS\t\t" + tm + "\t\t\n";
    }
    else if (!tr) {
        trformat = "\t" + tid + "\t\tPASS\t\t" + tm + "\t\t\n";
    }
    else {
        trformat = "\t" + tid + "\t\tPASS\t\t" + tm + "\t\t\n";
    }
    console.log(trformat);
    top.individualCaseResult(trformat);
    setTimeout("top.loadNextTest();", 2000);
}

function startTesting() {

    try {
        evalBtn.disabled = true;
        parent = document.getElementById("testarea");
    }
    catch (errRefParent) {
        alert('Error while retrieving the reference of parent element.\n\n' + errRefParent);
        testResult = false;
    }

    try {
        testelement = document.createElement('iframe');
        testelement.setAttribute("id", "testiframe");
        testelement.setAttribute("src", testPageURL);
    }
    catch (errCreateChild) {
        alert('Error while creating child.\n\n' + errCreateChild);
        testResult = false;
    }

    try {
        parent.appendChild(testelement);
    }
    catch (errAddChild) {
        alert('Error while attaching child to parent.\n\n' + errAddChild);
        testResult = false;
		
    }
    evaluateResult();

}

function checkAJAX(id, isAJAXurl, isAJAXtext, redirect) 
{
    var link = document.getElementById(id);
if (link == null) {
alert("No valid ID was passed to the checkAJAX function.");
return;
}
if (typeof XMLHttpRequest == "undefined") { // if the XMLHttpRequest function is undefined, try to define it now.
XMLHttpRequest = function() { // look for ActiveX implementations of AJAX, most recent first.
try { return new ActiveXObject("Msxml2.XMLHTTP.6.0") } catch(e) {}
try { return new ActiveXObject("Msxml2.XMLHTTP.3.0") } catch(e) {}
try { return new ActiveXObject("Msxml2.XMLHTTP") } catch(e) {}
try { return new ActiveXObject("Microsoft.XMLHTTP") } catch(e) {}
return false; // failing all of the above, return a pseudo-XMLHttpRequest object with error = true
}
};
var request = new XMLHttpRequest(); // try to create a web server request
if (request != false) { // if it isn't false then the browser does support AJAX
link.innerHTML = '<a href="' + isAJAXurl + '">' + isAJAXtext + '</a>';
if (redirect) { // if the caller wants us to redirect the browser,
var newLink = document.links[0]; // get the first hyperlink in the page
if (newLink) // if there is a link (it should be isAJAXurl if the assignemnt to link.innerHTML works)
window.location = newLink.href; // automatically redirect the browser to the isAJAX page.
}
}
delete request;
} 



