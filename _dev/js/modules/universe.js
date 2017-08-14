'use strict';

const $ = require('jquery');

class Universe {

	constructor( options ) {

		//setup any defaults
		this.defaults = {};

		//merge options with defaults
		this.settings = $.extend( true, {}, this.defaults, options );

		if( $('.shooting-star').length ) {
			this.stars();
        } else {
            return;
        }
	}

	stars() {
		var floor = 10;
		var ceiling = 3;

		function shootingStar(that, dir) {

            setInterval(function(){
                var topPos = Math.floor(Math.random() * 80) + 1,
					topPos = topPos + '%',
					leftPos = Math.floor(Math.random() * 40) + 1,
					leftPos = leftPos + '%',
					trans = Math.floor(Math.random() * 300) + 1,
					trans = trans + 'deg';
				//console.log(leftPos);
                that.css({
				    'top': topPos,
				    dir: leftPos,
					transform: 'rotate(' + trans + ')'
				});
            }, 2000);
		}

        $('.shooting-star').each(function(){
			var el = $(this);
			shootingStar(el, 'left');
        });

		$('.shooting-star-right').each(function(){
			var el = $(this);
			shootingStar(el, 'right');
        });
	}

}

module.exports = Universe;
