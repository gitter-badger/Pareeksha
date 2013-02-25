/* <!-- Test runs upon loading this page, and ensures to log result before closing 
 * 
 * Ensure to alter "testpageURL" in the parent of every test.
 * 
 * 
 * --> 
 * */

window.onload = startTesting;
//window.onunload = logResult;

var parent, testelement, testResult=true;


function logResult(tid,tr,tm)
{
	trformat = "";
	if (tr) 
	{
		trformat = "<tr><td>"+tid+"</td><td>PASS</td><td>"+tm+"</td></tr>";
	}
	else if (!tr) 
	{
		trformat = "<tr><td>"+tid+"</td><td>FAIL</td><td>"+tm+"</td></tr>";
	}
	else 
	{
		trformat = "<tr><td>"+tid+"</td><td>SKIPPED</td><td>"+tm+"</td></tr>";
	}
	console.log(trformat);
	serverURL = "/resources/Logtestresults.php";
	postResults(trformat);
}

function startTesting() {
    
	try 
    {
    		evalBtn.disabled=true;
    		parent = document.getElementById("testarea");
    }
    catch(errRefParent)
	{
    		alert('Error while retrieving the reference of parent element.\n\n'+errRefParent);
    		testResult=false;	
    }
    		
    try 
    {
     		testelement = document.createElement('iframe');
     		testelement.setAttribute("id","testiframe");
     		testelement.setAttribute("src",testPageURL);
	}
    catch(errCreateChild)
    {
    		alert('Error while creating child.\n\n'+errCreateChild);
    		testResult=false;
    }			
           			
    try 
    {
    		parent.appendChild(testelement);
    }
    catch(errAddChild)
    {
			alert('Error while attaching child to parent.\n\n'+errAddChild);	
    		testResult=false;
    }
	evaluateResult();
	
}



