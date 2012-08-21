(function () {
s.linkInternalFilters="javascript:,www.microsoft.com/windows/,wwwppe/windows/,wwwstaging/windows/";
s.loadModule("Media");
// include lt.js if metatag declared
if(getOmniMetaTagData("t_omni_linktracking_yes")) { 
	document.write('<scr'+'ipt type="text/javascript" src="http://www.microsoft.com/windows/framework/js/omniture/lt.js"><\/scr'+'ipt>'); 
} 
var temppath = _om_gbls.path.substring(1).toLowerCase();
// test vals
var tp = (temppath.indexOf("windows/") == 0) ? normalizePagename(getOmniPath(temppath,1,0)) : normalizePagename(getOmniPath(temppath,0,0)); 
s.pageName = (tp=="windows-7: " || tp=="pc-scout: " || tp=="windows-vista: " || tp=="downloads: " || tp=="internet-explorer: " || tp=="buy: " || tp=="social: " || tp=="offers: " || tp=="offers: 7-days: " || tp=="explore: ") ? tp + "default.aspx" : tp;  // added 8/30/09
var temppath2 = (temppath.indexOf("windows/") == 0 || temppath.indexOf("windowsxp/downloads/") == 0) ? getOmniPath(temppath,1,1) : getOmniPath(temppath,0,1); 
s.channel = (temppath2) ? temppath2.split(': ')[0] : "home";
s.server = _om_gbls.host;
s.prop1 = "win";
s.prop2 = "en-us";
s.prop3 = document.title;
var pathlength = temppath2.split(': ').length;
if (pathlength > 1) s.prop4 = temppath2.split(': ')[0] + ": " + temppath2.split(': ')[1]   
if (pathlength > 2) s.prop5 = s.prop4 + ": " + temppath2.split(': ')[2]
var tempvar;
tempvar = getOmniMetaTagData("t_omni_title"); if (tempvar) s.prop3 = tempvar;
}
)();