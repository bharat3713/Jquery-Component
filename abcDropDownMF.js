
(function ($) {

    $.fn.abcDropDown = function( options ) {
var identety= this.attr("id");
        // Establish our default settings
        var settings = $.extend({
                      
        }, options);

        return this.each( function() {
            // We'll get back to this in a moment
			$(this).css("width", settings.ddwidth);
			function DropDown(el) {
				this.dd = el;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					
					var obj = this;
					var dDown="";
					obj.dd.on('click', function(event){
						//alert( this.id);
						$('.abcDropDown').removeClass('active');
						$(this).toggleClass('active');
						dDown='';
						dDown = this.id;
						event.stopPropagation();
						
					});	
					
					
				}
			}
			$(".abcDropDown  li  a").click(function () {
			    $("#" + id).find('ul').show();
						var id = $(this).closest("div").attr("id");
					//	alert(id);
						$("#"+id).find('span').text($(this).text());			
						event.stopPropagation();
					});
			$(function() {
				var dd = new DropDown( $('#'+identety) );
				$(document).click(function() {
					// all dropdowns
					$('.abcDropDown').removeClass('active');
				});

			});
        });


    }

}(jQuery));