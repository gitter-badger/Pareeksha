
var lteIE7 = false/*@cc_on || @_jscript_version <= 5.7@*/;
var flyoutOpenClass = 'tabflyoutopen';

function navWait(o) {
	$jq('body').addClass('waitC');
	$jq('div.navbar *').each(function () { $jq(this).addClass('waitC'); });
}

function navClear(o) {
    $jq('body').removeClass('waitC');
    $jq('div.navbar *').each(function () { $jq(this).removeClass('waitC'); });
}

function hideFlyout(navId, flyoutId) {
	var flyout = $jq(flyoutId);
	if($jq(navId).hasClass('tabflyoutopen'))
	{
		$jq(navId).removeClass('tabflyoutopen');
		if (lteIE7) {
			flyout.hide();
		} else {
			flyout.hide('blind');
		}
	}
}

function showFlyout(flyoutId) {
	if (lteIE7) {
		$jq(flyoutId).show();
	} else {
		$jq(flyoutId).show('blind');
	}
}

function toggleFlyout(navId, flyoutId) {
	if ($jq(flyoutId).is(':hidden')) {
		showFlyout(flyoutId);
		$jq(navId).addClass('tabflyoutopen');
	} else {
		hideFlyout(navId, flyoutId)
	}
}

function zTop() {
	/*
	** For each div with class menu (i.e.,
	** the thing we want to be on top),
	*/
	$jq("#navbarcontainer").parents('div.header').children().andSelf().each(function () {

		var p = $jq(this);
		var pos = p.css("position");

		// If it's positioned,
		if (pos == "relative" ||
               pos == "absolute" ||
               pos == "fixed") {
			/*
			** Add the "on-top" class name when the
			** mouse is hovering over it, and remove
			** it when the mouse leaves.
			*/
			p.hover(function () { $jq(this).addClass("ztop"); },
                function () { $jq(this).removeClass("ztop"); });
		}
	});
}
