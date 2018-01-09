(function(){	
	$.extend($.fn.dataTableExt.oSort, {
	    "polstring-asc": function ( a, b ) {
		return a.localeCompare(b);
	    },   

	    "polstring-desc": function (a, b) {
		return a.localeCompare(b) * -1;
	    },
	});
}());
