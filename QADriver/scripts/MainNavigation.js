var containsVideo = false; // change to true from SilverlightMediaPlayer ctl.
jQuery.noConflict();

 jQuery(function() {
    prepareNavigation();
});

function prepareNavigation() {
    var silverlightPlayerRestartTimeout;
    
    jQuery(".navMenu > .navMenuList > li > div.menuDropdown").hover(
        function() {
            jQuery(this).children(".menuGroupWrapper").show()
            .end().children(".menuTitleLink").addClass("menuTitleLinkActive");
            
            // hide silverlight video control if present on the page
            if (containsVideo == true)
                toggleMediaOff();
        },
        function() {
            jQuery(this).children(".menuGroupWrapper").hide()
            .end().children(".menuTitleLink").removeClass("menuTitleLinkActive");

            // show silverlight video control if present on the page
            if (containsVideo) {
                silverlightPlayerRestartTimeout = setTimeout("toggleMediaOn()", 100);
            }
        }
    );
}

/**
* Hide silverlight video control
*/
function toggleMediaOff() {
    try {
        if (isDownLevelPlayerPaused != null) {
            var isDownLevelPlayerPaused = downlevelPlayerIsPaused; //save play/pause state of player
        }
        var cntr = jQueryget("sl_container");
        cntr.className = "sl_off";
        if (!isMediaPlayerPaused()) {
            pauseMediaPlayer();
            downlevelPlayerIsPaused = isDownLevelPlayerPaused; //restore the play/pause state of player
        }
    }
    catch (error) {
        try {
            if (isDownLevelPlayerPaused != null) {
                var isDownLevelPlayerPaused = downlevelPlayerIsPaused; //save play/pause state of player
            }
            var cntr = document.getElementById("sl_container");
            cntr.className = "sl_off";
            if (!isMediaPlayerPaused()) {
                pauseMediaPlayer();
                downlevelPlayerIsPaused = isDownLevelPlayerPaused; //restore the play/pause state of player
            }
        }
        catch (error) { }
    }
}

/**
* Show silverlight video control
*/
function toggleMediaOn() {
    try {
        var cntr = jQueryget("sl_container");
        cntr.className = "sl_on";

        if (isMediaPlayerPaused() && !downlevelPlayerIsPaused) {
            startMediaPlayer();
        }
    }
    catch (error) {
        try {
            var cntr = document.getElementById("sl_container");
            cntr.className = "sl_on";
            if (!isMediaPlayerPaused() && !downlevelPlayerIsPaused) {
                startMediaPlayer();
            }
        }
        catch (error) { }
    }
}

//IE6 hack : <select/> elements always stay on top regardless of styling
function hideIE6DropDowns(hide) {
    if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.indexOf("MSIE 6") >= 0) {
        var spanElements = document.getElementsByTagName("span");
        for (var i in spanElements) {
            if (spanElements[i].className == "productsDDHide") spanElements[i].style.visibility = (hide) ? "hidden" : "inherit";
        }
        var selectElements = document.getElementsByTagName("select");
        for (var i in selectElements) {
            if (selectElements[i].className == "dropDownText") selectElements[i].style.visibility = (hide) ? "hidden" : "inherit";
        }
    }
}