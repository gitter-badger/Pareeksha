var brandHeaderArray = {"forums.enterprisemobiletoday.com":"itbeBrandForum","forums.databasejournal.com":"itbeBrandForum","forums.databasejournal.com":"itbeBrandForum","forums.datamation.com":"itbeBrandForum","forums.serverwatch.com":"itbeBrandForum","discussions.virtualdr.com":"itbeBrandForum","forums.windrivers.com":"itbeBrandForum","forums.windrivers.com/vb/":"itbeBrandForum","www.sharkyforums.com":"itbeBrandForum","sharkyforums.com":"itbeBrandForum","www.sysopt.com/forum/":"itbeBrandForum","forums.practicallynetworked.com":"itbeBrandForum","discussions.hardwarecentral.com":"itbeBrandForum","forums.enterpriseitplanet.com":"itbeBrandForum","forums.dbasupport.com/forums/":"itbeBrandForum","www.pdastreet.com/forums/":"itbeBrandForum","forums.smallbusinesscomputing.com":"itbeBrandForum","www.antionline.com":"itbeBrandForum","www.codeguru.com/forum/":"developerBrandForum","forums.codeguru.com":"developerBrandForum","www.phpbuilder.com/board/":"developerBrandForum","board.flashkit.com/board/":"developerBrandForum","forums.devx.com":"developerBrandForum","www.aspmessageboard.com":"developerBrandForum","www.vbforums.com":"developerBrandForum","vbforums.com":"developerBrandForum","www.databasejournal.com":"ITBE-ACLHeader","www.datamation.com":"ITBE-ACLHeader","www.serverwatch.com":"ITBE-ACLHeader","www.infostor.com":"ITBE-ACLHeader","discussions.virtualdr.com":"ITBE-NonACLHeader","www.windrivers.com":"ITBE-NonACLHeader","www.premium.windrivers.com":"ITBE-NonACLHeader","www.sharkyextreme.com":"ITBE-ACLHeader","www.sysopt.com":"ITBE-NonACLHeader","www.practicallynetworked.com":"ITBE-ACLHeader","www.hardwarecentral.com":"ITBE-NonACLHeader","www.sqlcourse.com":"ITBE-ACLHeader","www.sqlcourse2.com":"ITBE-ACLHeader","www.linuxplanet.com":"ITBE-ACLHeader","www.ecommerce-guide.com":"ITBE-ACLHeader","www.e-commerceguide.com":"ITBE-ACLHeader","www.enterprisemobiletoday.com":"ITBE-ACLHeader","www.enterprisestorageforum.com":"ITBE-ACLHeader","www.itsmwatch.com":"ITBE-ACLHeader","www.itchannelplanet.com":"ITBE-ACLHeader","www.enterpriseitplanet.com":"ITBE-NonACLHeader","www.xmlfiles.com":"ITBE-NonACLHeader","www.projectmanagerplanet.com":"ITBE-ACLHeader","www.dbasupport.com":"ITBE-NonACLHeader","www.linux-mag.com":"ITBE-ACLHeader","www.linuxtoday.com":"ITBE-ACLHeader","www.internetnews.com":"ITBE-NonACLHeader","www.pdastreet.com":"ITBE-NonACLHeader","www.webopedia.com":"ITBE-NonACLHeader","www.smallbusinesscomputing.com":"ITBE-NonACLHeader","www.enterprisenetworkingplanet.com":"ITBE-NonACLHeader","www.esecurityplanet.com":"ITBE-NonACLHeader","www.cioupdate.com":"ITBE-NonACLHeader","www.enterpriseappstoday.com":"ITBE-NonACLHeader","www.earthweb.com":"ITBE-NonACLHeader","www.wi-fiplanet.com":"ITBE-NonACLHeader","forums.wi-fiplanet.com":"ITBE-NonACLHeader","www.antionline.com":"NoToolbar",
"www.codeguru.com":"Developer.com-ACLHeader","www.phpbuilder.com":"Developer.com-NonACLHeader","www.javascriptsource.com":"Developer.com-ACLHeader","www.javascript.internet.com":"Developer.com-ACLHeader","www.4guysfromrolla.com":"Developer.com-ACLHeader","www.webdevelopersjournal.com":"Developer.com-ACLHeader","www.javaboutique.com":"Developer.com-ACLHeader","www.sharepointbriefing.com":"Developer.com-ACLHeader","www.webreference.com":"Developer.com-NonACLHeader","www.htmlgoodies.com":"Developer.com-NonACLHeader","www.scriptsearch.com":"Developer.com-NonACLHeader","www.flashkit.com":"Developer.com-NonACLHeader","www.jguru.com":"Developer.com-ACLHeader","www.freevbcode.com":"Developer.com-NonACLHeader","www.justtechjobs.com":"Developer.com-NonACLHeader","www.linuxtoday.justtechjobs.com":"Developer.com-NonACLHeader","www.dbasupport.justtechjobs.com":"Developer.com-NonACLHeader","www.flashkit.justtechjobs.com":"Developer.com-NonACLHeader","www.phpbuilder.justtechjobs.com":"Developer.com-NonACLHeader","www.webdeveloper.justtechjobs.com":"Developer.com-NonACLHeader","www.webreference.justtechjobs.com":"Developer.com-NonACLHeader","www.dbjournal.justtechjobs.com":"Developer.com-NonACLHeader","www.devx.com":"Developer.com-NonACLHeader","www.webdeveloper.com":"Developer.com-NonACLHeader","www.developer.com":"Developer.com-CustomToolbar", "www.justlinux.com/forum":"itbeBrandForum", "www.justlinux.com":"ITBE-NonACLHeader","downloads.antionline.com":"itbeBrandForum","videos.developer.com":"Developer.com-CustomToolbar","www.videos.developer.com/video/":"Developer.com-CustomToolbar", "www.freelancer.internet.com":"ITBE-NonACLHeader","www.freelancer.itbusinessedge.com":"ITBE-NonACLHeader","www.partners.itbusinessedge.com":"ITBE-NonACLHeader","partners.itbusinessedge.com":"ITBE-NonACLHeader","e-newsletters.developer.com":"Developer-NonACLHeader","e-newsletters.itbusinessedge.com":"ITBE-NonACLHeader","www.board.phpbuilder.com":"developerBrandForum","www.itbusinessedge.com":"itbeBrandForum-CustomToolbar"
};
var siteURI = window.location;
siteURI = siteURI.toString();
var site_name = window.location.hostname;
site_name = site_name.toLowerCase();
var bradNameArray = "";
var showHeader = "";
var site_nameArray = "";
for (key in brandHeaderArray){
   //if(typeof(gtheader) != "undefined" && (brandHeaderArray[key]!="itbeBrandForum" || brandHeaderArray[key]!="developerBrandForum")){
      //bradNameArray = brandHeaderArray[key].split('-'); 
	  //showHeader = bradNameArray[0]+'-'+gtheader;
	 //}
	 //else
	  showHeader = brandHeaderArray[key];

	  
	if(showHeader=="developerBrandForum" || showHeader=="itbeBrandForum"){
					//console.log("Forum Block here"+showHeader); 
			// Check if its a forum site

			if(siteURI.indexOf("forums.") >= 0 || siteURI.indexOf("board.") >= 0|| siteURI.indexOf("discussions.") >= 0 || siteURI.indexOf("/board/") >= 0 || siteURI.indexOf("/forum/") >= 0 || siteURI.indexOf("vbforums") >=0 || siteURI.indexOf("aspmessageboard") >=0 || siteURI.indexOf("antionline") >=0 || siteURI.indexOf("sharkyforums") >=0 || siteURI.indexOf("downloads") >=0){
			
				if(site_name.indexOf(".lampdev.dms.quinstreet.net") >= 0){
					 site_nameArray = site_name.split('.lampdev.dms.quinstreet.net'); 
					 
					 if(site_nameArray[0].indexOf("www.") != 0){
					 site_name  = "www."+site_nameArray[0];
					 
					 //console.log("Lampdev site name"+site_name);
					 }
				 }
		 
				// Clean up dev urls
				if ( site_name.indexOf("dev-") >= 0 ) {
					site_nameArray = site_name.split('dev-'); 
					site_name = site_nameArray[1];
				}
				if(site_name.indexOf("downloads.") < 0 && site_name.indexOf("forums.") < 0 && site_name.indexOf("discussions.") < 0 && site_name.indexOf("www.") < 0) {
					site_name  = "www."+site_name;
				}
				
				// check siteURI for url forum sites
				if ( siteURI.indexOf("http://") >= 0 ) {
					siteURIArray = siteURI.split('http://'); 
					siteURI  = siteURIArray[1];
				}

				// Clean up dev urls
				if ( siteURI.indexOf("dev-") >= 0 ) {
					siteURIArray = siteURI.split('dev-'); 
					siteURI = siteURIArray[1];
				}

				if(siteURI.indexOf("downloads.") < 0 &&  siteURI.indexOf("forums.") < 0 && siteURI.indexOf("discussions.") < 0 && siteURI.indexOf("www.") < 0) {
					siteURI  = "www."+siteURI;
				}

				domainSearch=new RegExp(key);
				//console.log("Site Name"+site_name);
				//console.log("Site URI"+siteURI);
				if (domainSearch.test(site_name) == true || domainSearch.test(siteURI) == true){
					document.getElementById(showHeader).style.display="";
					break;
				}
			}

	}
	else if(showHeader!="developerBrandForum" && showHeader!="itbeBrandForum"){  
					 //console.log("Non Forum Block"+showHeader);

		domainSearch=new RegExp(key);
		if(site_name.indexOf("forums.") < 0 && site_name.indexOf("board.") < 0 && site_name.indexOf("downloads.") < 0 && site_name.indexOf("discussions.") < 0 && siteURI.indexOf("/board/") < 0 && siteURI.indexOf("/forum/") < 0 && site_name.indexOf(".lampdev.dms.quinstreet.net") >= 0){
			 site_nameArray = site_name.split('.lampdev.dms.quinstreet.net'); 
			 if(site_nameArray[0].indexOf("www.") != 0)
			 site_name  = "www."+site_nameArray[0];
		 }
	
	    if(site_name.indexOf("forums.") < 0 && site_name.indexOf("board.") < 0 && site_name.indexOf("downloads.") < 0 && site_name.indexOf("discussions.") < 0 && siteURI.indexOf("/board/") < 0 && siteURI.indexOf("/forum/") < 0 && (site_name.indexOf("dev-") == 0 || site_name.indexOf("dev.") == 0 || site_name.indexOf("js.") == 0)){
		
			if(site_name.indexOf("dev.") == 0)
				site_nameArray = site_name.split('dev.'); 
			else if(site_name.indexOf("js.") == 0)
				site_nameArray = site_name.split('js.'); 
			else if(site_name.indexOf("videos.") == 0)
				site_nameArray = site_name.split('videos.'); 				
			else			
				site_nameArray = site_name.split('dev-'); 
				
			if(site_nameArray[1].indexOf("www.") != 0){
			 site_name  = "www."+site_nameArray[1];
		   }
	    }

		
	    if(site_name.indexOf("forums.") < 0 && site_name.indexOf("board.") < 0 && site_name.indexOf("downloads.") < 0 && site_name.indexOf("discussions.") < 0 && siteURI.indexOf("/board/") < 0 && siteURI.indexOf("/forum/") < 0 && site_name.indexOf("dev.") == 0){
			site_nameArray = site_name.split('dev.'); 
			if(site_nameArray[1].indexOf("www.") != 0){
			 site_name  = "www."+site_nameArray[1];
		   }
	    }

		if(site_name.indexOf("forums.") < 0 && site_name.indexOf("board.") < 0 && site_name.indexOf("downloads.") < 0 && site_name.indexOf("discussions.") < 0 && siteURI.indexOf("/board/") < 0 && siteURI.indexOf("/forum/") < 0 && site_name.indexOf("local.") == 0){
			site_nameArray = site_name.split('local.'); 
			if(site_nameArray[1].indexOf("www.") != 0){
			 site_name  = "www."+site_nameArray[1];
		   }
	    }
		
		if(site_name.indexOf("forums.") < 0 && site_name.indexOf("board.") < 0 && site_name.indexOf("downloads.") < 0 && site_name.indexOf("discussions.") < 0 && siteURI.indexOf("/board/") < 0 && siteURI.indexOf("/forum/") < 0 && site_name.indexOf("cms.") == 0){
			site_nameArray = site_name.split('cms.'); 
			if(site_nameArray[1].indexOf("www.") != 0){
			 site_name  = "www."+site_nameArray[1];
		   }
	    }
		
		if(site_name.indexOf("forums.") < 0 && site_name.indexOf("board.") < 0 && site_name.indexOf("downloads.") < 0 && site_name.indexOf("discussions.") < 0 && siteURI.indexOf("/board/") < 0 && siteURI.indexOf("/forum/") < 0){
		   if(site_name.indexOf("www.") != 0){
			 site_name  = "www."+site_name ;
		   }
		 }
		
		  //console.log("Site Name"+site_name);
		if (domainSearch.test(site_name) == true){
			document.getElementById(showHeader).style.display="";
			break;
		}
	}
}



