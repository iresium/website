'use strict';

const $ = require('jquery');

class Gradients {

	constructor( options ) {

		//setup any defaults
		this.defaults = {};

		//merge options with defaults
		this.settings = $.extend( true, {}, this.defaults, options );

		if( $('.gradient').length ) {
			this.setup();
			this.events();
        } else {
            return;
        }
	}

	setup() {

		$('.gradient').each(function(){
			$(this).append("<span class='bg-colors'><span class='bg-orange'></span><span class='bg-purple'></span><span class='bg-blue'></span></span>");
		});

	}

	events() {

		var gradient = $('.gradient'),
			colors = $('.bg-colors > *'),
			active =  Math.round(Math.random() * 2),
			pause = 8000,
			count = colors.length,
			i = 0;

		$(document).ready(function(){

			colors.eq(active).addClass('is-active initial');

			setTimeout(transition,pause);

			function transition(){

				var newBg = colors.eq(i).css("background");
				gradient.css("background", newBg);

				colors.eq(i).removeClass('is-active initial');

				if( ++i >= count ){
					i = 0;
				}

				colors.eq(i).addClass('is-active');
				setTimeout(transition, pause);
			}
		});

	}

}

module.exports = Gradients;
