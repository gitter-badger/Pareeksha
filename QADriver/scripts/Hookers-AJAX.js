/// <reference path="../../../Assets/Scripts/JQuery/jquery-1.5.1-vsdoc.js" />

if (typeof (VLSC) == 'undefined')
	VLSC = {};

VLSC.Common = function () {
	/* Private variables */
	var _showSpinner = false;
	var globalTimeOutForSpinnerToShow = 500;
	var globalTimeOutForSpinnerToHide = 3000;
	var reqSpecificTimeOutForSpinnerToShow = -1;
	var _spinnerText = '';

	/* Private functions */
	var ajaxErrorHandler = function (jqXHR, textStatus, errorThrown) {
		_showSpinner = false;
		if (jqXHR.status == 401) {
			window.onbeforeunload = null;
			window.location = VLSC.Subscription.UrlDefault;
		}
		else {
			var obj = $jq.parseJSON(jqXHR.responseText);
			var errorUrl = obj.url;
			if (errorUrl != undefined && errorUrl != null && errorUrl.length > 0) {
				window.onbeforeunload = null;
				window.location = errorUrl;
			}
		}
	}

	var checkErrRedirect = function (result, callBack) {
		try {

			var errorUrl;
			if (result.errorRedirUrl) {
				errorUrl = result.errorRedirUrl;
			}
			else {
				errorUrl = $jq.parseJSON(result).errorRedirUrl;
			}

			if (errorUrl != undefined && errorUrl != null && errorUrl.length > 0) {
				window.onbeforeunload = null;
				window.location = errorUrl;
			}
			else {
				if (typeof callBack == 'function') {
					callBack(result);
				}
			}
		}
		catch (err) {
			if (typeof callBack == 'function') {
				callBack(result);
			}
		}
	}

	var openModalDialogSpinner = function () {
		$jq("#spinnerImageContainer").dialog({ resizable: false, modal: true, width: 242, height: 76,
			dialogClass: 'ui-dialogWithDropShadow', overlay: { backgroundColor: '#000', opacity: 0.5 }, closeOnEscape: false,
			open: function (event, ui) { $jq(".ui-dialog-titlebar-close", $jq(this).parent()).hide(); $jq(".ui-dialog-titlebar", $jq(this).parent()).hide(); $jq(".ui-dialog", $jq(this).parent()).css('height', '76px'); },
			create: function (event, ui) { $jq(".ui-dialog-titlebar-close", $jq(this).parent()).hide(); $jq(".ui-dialog-titlebar", $jq(this).parent()).hide(); $jq(".ui-dialog", $jq(this).parent()).css('height', '76px'); }
		});
	}

	var closeModalDialogSpinner = function () {
		$jq("#spinnerImageContainer").dialog('close');
	}

	var showSpinner = function () {
		var varTimeOut = globalTimeOutForSpinnerToShow;
		if (reqSpecificTimeOutForSpinnerToShow != -1) {
			varTimeOut = reqSpecificTimeOutForSpinnerToShow;
		}
		setTimeout(function () {
			if (_showSpinner) {
				$jq('#spinnerText').text(_spinnerText);
				/*shPU('genericSpinner');*/
				openModalDialogSpinner();
			}
		}, varTimeOut);
	}

	var hideSpinner = function () {
		/*clsPU('genericSpinner');*/
		if ($jq("#spinnerImageContainer").is(':visible')) {
			closeModalDialogSpinner();
		}
		_showSpinner = false;
		_spinnerText = '';
	}

	var registerAjaxStartAndEndEvent = function () {
		$jq(document).ajaxStart(function () {
			if (!VLSC.Common.OverrideShowSpinnerVar && _showSpinner) {
				showSpinner();
			}
		}).ajaxComplete(function () {
			bindSectionContainerEvent();
			if (!VLSC.Common.OverrideShowSpinnerVar) {
				hideSpinner();
			}
			VLSC.Common.OverrideShowSpinnerVar = false;
			BindSiteWideEvents();
		});
	}

	bindSectionContainerEvent = function () {
		$jq(".ssSCHeader").unbind("click");
		$jq(".ssSCHeader").bind("click", function () {
			var $divContent = $jq(".ssSCContent", $jq(this).parent("div"));
			if ($divContent.hasClass("ssDivShow")) {
				$divContent.removeClass("ssDivShow").addClass("ssDivHide");
				$jq(".ssChevron", $jq(this)).removeClass().addClass("ssChevron icoChevronOpen1");

			}
			else {
				$divContent.removeClass("ssDivHide").addClass("ssDivShow");
				$jq(".ssChevron", $jq(this)).removeClass().addClass("ssChevron icoChevronClose1");
			}
		});
	}

	bindListBoxAllEvent = function () {
		$jq(".lbAll").unbind("change");
		$jq(".lbAll").bind("change", function () {
			var selectedCount = $jq("option:selected", $jq(this)).length;
			var totalCount = $jq("option", $jq(this)).length;
			if ($jq("option[value='']", $jq(this)).attr("selected") == "selected" && selectedCount > 1 && selectedCount < totalCount) {
				$jq("option[value='']", $jq(this)).removeAttr("selected");
			} else if (selectedCount == 0) {
				$jq("option[value='']", $jq(this)).attr("selected", true);
			} else if (selectedCount + 1 == totalCount) {
				$jq("option", $jq(this)).removeAttr("selected");
				$jq("option[value='']", $jq(this)).attr("selected", true);
			}
		});
	}

	redirectAjax = function (result, textStatus, jqXHR) {
		var obj = $jq.parseJSON(result);
		var url = obj.url;
		if (url != undefined && url != null && url.length > 0) {
			window.location = url;
		}
	}

	/* Public functions */
	return {
		init: function () {
			registerAjaxStartAndEndEvent();
			bindSectionContainerEvent();
			bindListBoxAllEvent();
		},

		OverrideShowSpinnerVar: false,

		EnableElement: function (sender, enableFlag) {
			if (enableFlag) {
				$jq(sender).removeAttr('disabled');
			}
			else {
				$jq(sender).attr('disabled', 'disabled');
			}
		},

		AjaxGet: function (dataType, url, inputData, successCallBack, spinnerText) {
			_showSpinner = true;
			_spinnerText = (spinnerText == undefined) ? 'Retrieving Data...' : spinnerText;
       
			$jq.ajax({
				type: "GET",
				dataType: dataType,
				url: url,
				data: inputData,
				cache: false,
				success: function (result, textStatus, jqXHR) {
					checkErrRedirect(result, successCallBack);
				},
				error: ajaxErrorHandler
			});
		},

		AjaxPost: function (dataType, url, inputData, successCallBack, spinnerText) {
			_showSpinner = true;
			_spinnerText = (spinnerText == undefined) ? 'Saving Data...' : spinnerText;
			
			var validationToken = $jq("input[name='__RequestVerificationToken']").val();
			if (validationToken) {
				if (!inputData)
					inputData = new Object();
				inputData.__RequestVerificationToken = validationToken;
			}
			$jq.ajax({
				type: "Post",
				dataType: dataType,
				url: url,
				data: inputData,
				cache: false,
				success: function (result, textStatus, jqXHR) {
					checkErrRedirect(result, successCallBack);
				},
				error: ajaxErrorHandler
			});
		},

		ProcessComplexJsonObject: function (obj) {
			var result = {};
			var buildResult = function (object, prefix) {
				for (var key in object) {
					var postKey = isFinite(key) ? (prefix != "" ? prefix : "") + "[" + key + "]" : (prefix != "" ? prefix + "." : "") + key;
					switch (typeof (object[key])) {
						case "number": case "string": case "boolean":
							result[postKey] = object[key];
							break;
						case "object":
							if (object[key] != null && object[key] != undefined && [key].toUTCString)
								result[postKey] = object[key].toUTCString().replace("UTC", "GMT");
							else {
								buildResult(object[key], postKey != "" ? postKey : key);
							}
					}
				}
			};
			buildResult(obj, "");
			return result;
		},

		OpenModalDialog: function (divId, width, height, title) {
			$jq("#" + divId).dialog({ title: title, resizable: false, modal: true, width: width, height: height, position: 'center', dialogClass: 'ui-dialogWithDropShadow', overlay: { backgroundColor: '#000', opacity: 0.5} });
		},

		OpenModalDialogForCtrl: function (divCtrl, width, height, title) {
			divCtrl.dialog({ title: title, resizable: false, modal: true, width: width, height: height, position: 'center', dialogClass: 'ui-dialogWithDropShadow', overlay: { backgroundColor: '#000', opacity: 0.5} });
		},

		CloseModalDialog: function (divId) {
			$jq("#" + divId).dialog('close');
		},

		CloseModalDialogForCtrl: function (divCtrl) {
			divCtrl.dialog('close');
		},

		SignIn: function (returnUrl) {
			VLSC.Common.AjaxPost("html", ApplicationPath + "/Default/SignIn", { returnUrl: returnUrl }, redirectAjax, "");
		},

		SignOut: function (returnUrl) {
			VLSC.Common.AjaxPost("html", ApplicationPath + "/Default/SignOut", { returnUrl: returnUrl }, redirectAjax, "");
		},

		EndImpersonation: function (returnUrl) {
			VLSC.Common.AjaxPost("html", ApplicationPath + "/Default/EndImpersonation", { returnUrl: returnUrl }, redirectAjax, "");
		},

		RemoveHtmlWhiteSpace: function (htmlString) {
			var expr = new RegExp('>[ \t\r\n\v\f]*<', 'g');
			htmlString = htmlString.replace(expr, '><');
			return htmlString;
		},

		IsAlphaNumeric: function (str) {
			var regex = new RegExp(/^([a-zA-Z0-9_-]+)$/);
			return regex.test(str);
		},

		ExpandSectionContainer: function (containerId) {
			var $divContainer = $jq("#" + containerId);
			var $divContent = $jq(".ssSCContent", $divContainer);
			if ($divContent.hasClass("ssDivHide")) {
				$divContent.removeClass("ssDivHide").addClass("ssDivShow");
				$jq(".ssChevron", $divContainer).removeClass().addClass("ssChevron icoChevronClose1");
			}
		},

		BindEventForEnterKey: function (elemId, eventFunction) {
			$jq("#" + elemId).unbind('keyup').bind('keyup', function (e) {
				if (e.keyCode == 13) {
					e.preventDefault();
					if (typeof eventFunction == 'function') {
						eventFunction.apply(this);
					}
				}
			});
		}
	}
} ();

$jq(document).ready(VLSC.Common.init);

VLSC.Common.Sorting = function () {
	/* Private variables */
	var _sortOrder = "asc";
	var _defaultImg = "../Assets/Images/sortable_arrow.gif";
	var _ascImg = "../Assets/Images/ascending_arrow.gif";
	var _descImg = "../Assets/Images/descending_arrow.gif";

	/* Private functions */
	var compare = function (a, b, colIdx, type) {
		colIdx = isNaN(colIdx) ? 0 : colIdx;
		var aValue, bValue;
		if ($jq.browser.mozilla) {
			aValue = a.cells[colIdx].textContent;
			bValue = b.cells[colIdx].textContent;
		}
		else {
			aValue = a.cells[colIdx].innerText;
			bValue = b.cells[colIdx].innerText;
		}		
		if(type=="number") 
			return parseInt(aValue, 10) > parseInt(bValue, 10) ? (_sortOrder == "desc" ? true : false) : (_sortOrder == "desc" ? false : true);
		else if(type=="date")
			return Date.parse(aValue.toLowerCase()) > Date.parse(bValue.toLowerCase()) ? (_sortOrder == "desc" ? true : false) : (_sortOrder == "desc" ? false : true);
		else
			return aValue.toLowerCase() > bValue.toLowerCase() ? (_sortOrder == "desc" ? true : false) : (_sortOrder == "desc" ? false : true);
	}


	/* Public functions */
	return {
		SetSortableColumns: function (tableId, cols) {
			for (var i = 0; i < cols.length; i++) {
				VLSC.Common.Sorting.SetSortableColumn(tableId, cols[i].Idx, cols[i].type);
			}
		},
		SetSortableColumn: function (tableId, colIdx, type) {
			var $th;
			$th = $jq("#" + tableId).find("th:eq(" + colIdx + ")");
			if ($th.length > 0) {
				$th[0].innerHTML = $th[0].innerHTML + "<img src='" + _defaultImg + "' alt='...' />";
				$th.unbind("click");
				$th.css("cursor", "pointer");
				$th.bind("click", function () { VLSC.Common.Sorting.Sort(tableId, colIdx); });
			}
		},
		Sort: function (tableId, colIdx, type) {
			colIdx = isNaN(colIdx) ? 0 : colIdx;
			var $th = $jq("#" + tableId).find("th:eq(" + colIdx + ")");
			var $thImg = $th.find("img");
			if ($thImg.length > 0) {
				_sortOrder = $thImg[0].src.toLowerCase().indexOf("ascending") >= 0 ? "asc" : "desc";
			}
			var arr = $jq("#" + tableId + " tbody tr");
			$jq("#" + tableId + " th").find("img").attr("src", _defaultImg);
			$thImg[0].src = _sortOrder == "desc" ? _ascImg : _descImg;
			var i, j;
			for (i = 0; i < arr.length; i++) {
				for (j = i + 1; j < arr.length; j++) {
					if (compare(arr[i], arr[j], colIdx, type)) {
						var temp = arr[i];
						arr[i] = arr[j];
						arr[j] = temp;
					}
				}
			}
			$jq("#" + tableId + "tbody tr").remove();
			for (i = 0; i < arr.length; i++) {
				arr[i].className = ((i + 1) % 2 == 0) ? "ssRowA" : "ssRowN";
				$jq("#" + tableId).append(arr[i]);
			}
		}
	}
} ();