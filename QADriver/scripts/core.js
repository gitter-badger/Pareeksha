function CreateAtlasImage (sourceURL)
{
	var atlasImage = new Image();
	atlasImage.src = sourceURL;
	
	//var iFrameElement = document.createElement("iframe"); 
	//iFrameElement.style.display = "none";
	//iFrameElement.setAttribute("src", "http://switch.atdmt.com/action/" + value);
}

jQuery(document).ready(function() {

   	jQuery(".roundedCorners").each(function(i) {
   		var thisBox = jQuery(this);
   		var content = thisBox.html();
   		thisBox.html("");
   		thisBox.append("<div class='topCorners'><span></span></div>")
			.append("<div class='roundedCornersContent cf'>" + content + "</div>")
			.append("<div class='bottomCorners'><span></span></div>");
   	});
});

function randomizeRetailerList() {
    // loop through image array, assign a random element to an image in the grid, then delete it from the array
    var newlist = new Array();
    var list = document.getElementById("retailers");
    if (list != null) {
        var listItems = list.getElementsByTagName("li");
        var remainingItems = listItems;
        var count = listItems.length;
        for (var i = 0; i < count; i++) {
        try{
            n = corerand(remainingItems.length+1);
            }
            catch(error){
            n = remainingItems.length;
        }
        if (n > remainingItems.length) {
            n = remainingItems.length;
        }
        else if (n < 1) {
            n = 1;
        }
            var itemToMove = n - 1;
            newlist[i] = remainingItems[itemToMove];

            // NOW REMOVE THE ITEM FROM THE LIST COLLECTION - SPLICE is not cross browser - so create a holder and recreate;
            var tempList = new Array();
            var removereached = false;
            for (var j = 0; j < remainingItems.length; j++) {
                var k = j;
                if (removereached) {
                    // Stepped over the remove so we insert at -1 from current j counter
                    k--;
                }
                if (itemToMove != j) {
                    tempList[k] = remainingItems[j];
                }
                else {
                    removereached = true;
                }
            }
            // Finally lets reset the remaining items to the new list
            remainingItems = tempList;
        }
        // got the final set so we can now assign
        var newHTML = "";
        for (var i = 0; i < newlist.length; i++) {
            newHTML = newHTML + "<li>" + newlist[i].innerHTML + "</li>";
        }
        jQuery("#retailers").html(newHTML);
    }
}

function corerand(n) {
    return (Math.floor(Math.random() * n));
}