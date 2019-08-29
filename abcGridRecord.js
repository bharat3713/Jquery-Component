(function ($) {
    $.fn.abcGrid = function (options) {
        // This is default options.
		//alert("ok");
        var settings = $.extend({
            // These are the defaults value.
            numberOfColume: 6,
            columeWidth: []
        }, options);
        //alert(settings.dataSource[0].split(','));

        var numberOfKeys = settings.columeName.length;
        var toatalColWidth = settings.columeWidth;
        var totalRecord = settings.dataSource.length;
        var myRecord = [settings.dataSource]
        this.addClass("abcGrid")
        $("<div id='abcGrid_Row' class='tHead'></div>").appendTo(this);
        $("<div id='tbody' class='tbody scrollbox3'></div>").appendTo(this);        
        //this loop is for heading only	
        for (i = 0; i < numberOfKeys; i++) {
            $("<div id='headCol" + i + "' class='tcol' style='width:calc(" + settings.columeWidth[i] + " - 8px)'><span class='dataCol_DataHead'>" + settings.columeName[i] + "</span><a id='"+settings.columeName[i].replace(/\s/g, '')+"' class='short_arrow' href='#'></a></div>").appendTo("#abcGrid_Row");
        }
        var myD = [];
        //--------------------------------
        for (var i = 0; i < totalRecord; i++) {
            myD.push([settings.dataSource[i].Threat, settings.dataSource[i].Name, settings.dataSource[i].Id, settings.dataSource[i].Movement_Type, settings.dataSource[i].vdate, settings.dataSource[i].Time]);
        }
        var theTable = "";
        for (var j = 0; j < totalRecord; j++) {
            theTable += "<div id='dataRow_" + j + "' class='dataRow' onClick='showInmateData();'>";
            for (var k = 0; k < numberOfKeys; k++) {
                if (k == 0) {
                    theTable += "<div class='tcol "+settings.columeName[k]+"' style='width:calc(" + settings.columeWidth[0] + " - 8px)'><input type='hidden' value='" + settings.dataSource[j].Threat + "'></input><span class='dataCol_Data_" + settings.dataSource[j].Threat + "'></span></div>";
                } else {
                    theTable += "<div class='tcol "+settings.columeName[k]+"' style='width:calc(" + settings.columeWidth[k] + " - 14px)'>" + myD[j][k] + "</div>";
                }
            }
            theTable += '</div>';
        }
        //Finally appended the whole string to the table
        
        $('#tbody').append(theTable);
		//working fine till here -----
		
		
   //sorting
  
   
   $('#Id').on('click', function () {
  $('#tbody div.Id').map(function () {	 
    return {val: parseFloat($(this).text(), 10), el: this.parentNode};	
  }).sort(function (a, b) {
    return a.val - b.val;
  }).map(function () {
    return this.el;
  }).appendTo('#tbody');
 
});
   $('#Date').on('click', function () {
  $('#tbody div.Id').map(function () {	 
    return {val: parseFloat($(this).text(), 10), el: this.parentNode};	
  }).sort(function (a, b) {
    return a.val - b.val;
  }).map(function () {
    return this.el;
  }).appendTo('#tbody');
 
});

 $('#Time').on('click', function () {
  $('#tbody div.Time').map(function () {	 
    return {val: parseFloat($(this).text(), 10), el: this.parentNode};	
  }).sort(function (a, b) {
    return a.val - b.val;
  }).map(function () {
    return this.el;
  }).appendTo('#tbody');
 
});
 
$('#Name').click(function(ev){   
    var compare_rows = function (a,b){
      var a_val = $(a).text().toLowerCase();
      var b_val = $(b).text().toLowerCase();
      if (a_val>b_val){
        return 1;
      }
      if (a_val<b_val){
        return -1;
      }
      return 0;
    };   
    $('#tbody .dataRow').sort(compare_rows).appendTo('#tbody');
  });
		$('#MovementType').click(function(ev){   
    var compare_rows = function (a,b){
      var a_val = $(a).text().toLowerCase();
      var b_val = $(b).text().toLowerCase();
      if (a_val>b_val){
        return 1;
      }
      if (a_val<b_val){
        return -1;
      }
      return 0;
    };   
    $('#tbody .dataRow').sort(compare_rows).appendTo('#tbody');
  });
  
  
  $('#Threat').click(function(ev){   
    var compare_rows = function (a,b){
		
      var a_val = $(a).find('input').val().toLowerCase();
      var b_val = $(b).find('input').val().toLowerCase();
	 // alert(a_val+b_val);
      if (a_val>b_val){
        return 1;
      }
      if (a_val<b_val){
        return -1;
      }
      return 0;
    };   
    $('#tbody .dataRow').sort(compare_rows).appendTo('#tbody');
  });
  
  	$(".dataRow").click(function (){	
			//alert("ss");
			$("#addInmateDATA_modal").show();
			$("#addInmateDATA").show();
			$('.scrollboxMedi').enscroll({
			showOnHover: true,
			verticalTrackClass: 'track3',
			verticalHandleClass: 'handle3'
		});
			});




		//write above it--------
    };
}(jQuery));