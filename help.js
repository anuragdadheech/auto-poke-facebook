/*global $*/ 
"use strict";
$("#help-container").click(function(){
	$(".help-data").slideToggle();
	if ($("#chevron").hasClass("icon-angle-down")) {
		$("#chevron").removeClass("icon-angle-down").addClass("icon-angle-right");
	}
	else {
		$("#chevron").removeClass("icon-angle-right").addClass("icon-angle-down");	
	}

});