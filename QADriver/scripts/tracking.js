var tracking;
var gDcsId="";
var gFpc="WT_FPC";
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
var pageTracker;

/**
 * tracking constructor.
 */
function Tracking()
{
	this.xmlDoc = null;
}

/**
 * Setup tracking.
 * @param xmlFile(String) The tracking.xml file to load.
 */
function setupTracking(xmlFile)
{
	tracking = new Tracking();
	tracking.loadXML(xmlFile);
}

function trackForId(xmlid,appendArr)
{
	atlas(xmlid);
}

function track(xmlid,appendData)
{	
	var target;
	var wp;
	var redirect;
	var info = getTrackingInfo(xmlid);
	trackForId(xmlid,appendData);
	target = "_self";
	try
	{
		wp = info.windowParameters;
	}
	catch(e){}
	try
	{
		redirect = info.redirect;
	}
	catch(e){}
	if(!redirect) return;
	
	try
	{
		if(info.target) target = info.target;
		else if(redirect.toLowerCase().indexOf("http://") == 0) target = "_blank"; // By default, DO NOT open external URLs in a new window
	}
	catch(e){}
	
	//if(wp) window.open(info.redirect,target,wp);
	//else window.open(info.redirect,target);
}

function atlas(xmlid)
{
	var info = getTrackingInfo(xmlid);
	if(!info.atlas) return;
	var timestamp = new Date();
	var qs = "?qstr=random=" + Math.ceil(Math.random() * 99999999)+timestamp.getUTCFullYear()+timestamp.getUTCMonth()+timestamp.getUTCDate()+timestamp.getUTCHours()+timestamp.getUTCMinutes()+timestamp.getUTCSeconds()+timestamp.getUTCMilliseconds();
	var uri = info.atlas + qs;

	loadScript(uri);
}

function loadScript(src)
{
	if (!document.getElementsByTagName || !document.createElement || !document.appendChild) 
	{
		return false;
	}
	else
	{
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = src;
		document.getElementsByTagName("head")[0].appendChild(script);
		return true;
	}	
}


function createXMLHttpRequest()
{
	if(typeof XMLHttpRequest != "undefined") return new XMLHttpRequest();
	else if (typeof ActiveXObject != "undefined") return new ActiveXObject("Microsoft.XMLHTTP");
	else throw new Error("XMLHttpRequest not supported");
}

function loadXML(file)
{
 	var request = this.createXMLHttpRequest();
	request.open("GET", file, true);
	request.onreadystatechange = function()
	{
		if(request.readyState == 4)
		{	
			xmlDoc = request.responseXML;
		}
	}
	request.send(null);
}

function getTrackingInfo(xmlid)
{
	var trackNodes = xmlDoc.getElementsByTagName("track");
	var index;
	var i = 0;
	var results = {};
	for(i = 0; i < trackNodes.length; i++)
	{
		if(xmlid == trackNodes[i].attributes.getNamedItem("id").value)
		{
			index = i;
		}
	}
	if(null == index) return index;
	try
	{
		var a = trackNodes[index].getElementsByTagName("atlas").item(0).firstChild.nodeValue;
		results.atlas = a;
	}
	catch(e){}
	try
	{
		var r = trackNodes[index].getElementsByTagName("redirect").item(0).firstChild.nodeValue;
		results.redirect = r;
	}
	catch(e){}
	try
	{
		var rt = trackNodes[index].getElementsByTagName("redirect").item(0).attributes.getNamedItem("target").value
		results.target = rt;
	}
	catch(e){}
	try
	{
		wp = trackNodes[index].getElementsByTagName("redirect").item(0).attributes.getNamedItem("windowParameters").value
		results.windowParameters = wp;
	}
	catch(err){}
	return results;
}

Tracking.prototype.createXMLHttpRequest = createXMLHttpRequest;
Tracking.prototype.loadXML = loadXML;
Tracking.prototype.track = track;
Tracking.prototype.trackForId = trackForId;
Tracking.prototype.atlas = atlas;
Tracking.prototype.getTrackingInfo=getTrackingInfo;