(function ( $ ) {
$.fn.abcGrid = function( options ) {
// This is default options.
var settings = $.extend({
// These are the defaults value.
numberOfColume: 6,
columeWidth: ["10%","10%","10%","10%","10%","10%",]
}, options );
//alert(settings.dataSource[0].split(','));
var numberOfKeys = settings.columeName.length;
var totalRecord=settings.dataSource.length;
var myRecord=[settings.dataSource]
this.addClass( "abcGrid" )
	$("<div id='abcGrid_Row' class='tHead'></div>").appendTo(this);
	$("<div id='tbody' class='tbody'></div>").appendTo(this);
	
	var a=[];
	var b=[];
	var c=[];
	//this loop is for heading only	
for(i=0;i<numberOfKeys;i++){
$("<div id='headCol"+i+"' class='tcol' style='width:calc(" + settings.columeWidth[i] + " - 8px)'><span class='dataCol_DataHead'>"+settings.columeName[i]+"</span><a class='short_arrow' href='#'></a></div>").appendTo("#abcGrid_Row");	
}
// heading loop end	

for(j=0;j<totalRecord;j++){
	$("<div id='dataRow_"+j+"' class='dataRow'></div>").appendTo("#tbody");	

	$("<div class='tcol' style='width:calc(" + settings.columeWidth[0] + " - 8px)'><span class='dataCol_Data_"+settings.dataSource[j].Threat+"'></span></div>").appendTo("#dataRow_"+j);
	$("<div class='tcol' style='width:calc(" + settings.columeWidth[1] + " - 8px)'><span class='dataCol_Data'>"+settings.dataSource[j].Name+"</span></div>").appendTo("#dataRow_"+j);
	$("<div class='tcol' style='width:calc(" + settings.columeWidth[2] + " - 8px)'><span class='dataCol_Data'>"+settings.dataSource[j].Id+"</span></div>").appendTo("#dataRow_"+j);
	$("<div class='tcol' style='width:calc(" + settings.columeWidth[3] + " - 8px)'><span class='dataCol_Data'>"+settings.dataSource[j].Movement_Type+"</span></div>").appendTo("#dataRow_"+j);
	$("<div class='tcol' style='width:calc(" + settings.columeWidth[4] + " - 8px)'><span class='dataCol_Data'>"+settings.dataSource[j].vdate+"</span></div>").appendTo("#dataRow_"+j);
	$("<div class='tcol' style='width:calc(" + settings.columeWidth[5] + " - 8px)'><span class='dataCol_Data'>"+settings.dataSource[j].Time+"</span></div>").appendTo("#dataRow_"+j);

}

};
}( jQuery ));

// JavaScript Document