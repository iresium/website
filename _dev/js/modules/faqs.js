'use strict';

const $ = require('jquery');
//const Q = require('q');

class Faq {

	constructor( options ) {

		//setup any defaults
		this.defaults = {};

		//merge options with defaults
		this.settings = $.extend( true, {}, this.defaults, options );

		if( $('.faq').length ) {
			this.setup();
			this.events();
        } else {
            return;
        }
	}

	setup() {
		//any general setup code (ex. getting window width) can go here.
		//console.log('Click functions intialized');
	}

	events() {

		$('.faq__answer').slideUp();
		function faq() {

		}

		$('.faq__question, .faq__close').click(function(){
			var el = $(this).parents('.faq'),
				question = el.find('.faq__answer');

			if( el.hasClass('is-active') ){
				el.removeClass('is-active');
				question.slideUp(500);
			} else {
				el.addClass('is-active');
				question.slideDown(500);
			}
		});

	}

}

module.exports = Faq;
