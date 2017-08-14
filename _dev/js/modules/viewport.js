'use strict';

const $ = require('jquery');

class Viewport {

	constructor( options ) {

		//setup any defaults
		this.defaults = {};

		//merge options with defaults
		this.settings = $.extend( true, {}, this.defaults, options );

		if( $('*[data-animate-in], *[data-detect-viewport]').length ) {
			this.setup();
			this.events();
        } else {
            return;
        }
	}

	setup() {
		$.fn.isOnScreen = function(){
            var win = $(window);
            var viewport = {
                top : win.scrollTop(),
                left : win.scrollLeft()
            };
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();
            var bounds = this.offset();
            bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();
            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
        };
	}

	events() {

		function changeState() {
            var obj = $('*[data-animate-in], *[data-detect-viewport]'),
				d = 0; //delay
            obj.each(function(index) {
				if( $(this).attr('data-animate-in-delay') ) {
                    d = $(this).attr('data-animate-in-delay');
                } else {
					d = 0;
				}

				(function(that) {
                    var t = setTimeout(function() {
                        if ( $(that).isOnScreen() ) {
                            $(that).addClass('in-view');
                        } else {
							$(that).removeClass('in-view');
						}
                    }, d);

                })(this, index);
            });
		}

		var w = $(window);
        $(document).ready(function() {
            setTimeout(function() {
               changeState();
            }, 500);
        });

        w.on("resize scroll",function(){
        	changeState();
        });

	}

}

module.exports = Viewport;
