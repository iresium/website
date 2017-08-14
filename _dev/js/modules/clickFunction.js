'use strict';

const $ = require('jquery');
//const Q = require('q');

class ClickFunctions {

	constructor( options ) {

		//setup any defaults
		this.defaults = {};

		//merge options with defaults
		this.settings = $.extend( true, {}, this.defaults, options );

		if( $('*[data-click-target]').length ) {
			this.events();
        } else {
            return;
        }
	}

	events() {

		$('*[data-click-target]').on('click touchstart:not(touchmove)', function() {

            var trigger = $(this).attr('data-click-target'),
            	bodyCls = $(this).attr('data-click-bodyClass'),
            	target = $("#" + trigger),
				mask = target.find('.modal-screen');

            history.replaceState(null, '', '#' + trigger);

            if( target.hasClass('is-active') ) {
                target.removeClass('is-active');
                history.replaceState(null, '', ' ');
            } else {
               target.addClass('is-active');
            }

            // Check for additional body class
            if( $(this).attr('data-click-bodyClass') ) {
                if( $('body').hasClass(bodyCls) ) {
                    $('body').removeClass(bodyCls);
                } else {
                   $('body').addClass(bodyCls);
                }
            }
        });

		$('.modal-screen').click(function(){
			$('body').removeClass('modal-is-active');
			$('.modal-wrap').removeClass('is-active');
			history.replaceState(null, '', ' ');
		});

        $(document).ready(function(){
            var hash = window.location.hash.replace('#', '');
            $('.modal-wrap').each(function(){
                var modalId = $(this).attr('id')
                if(modalId === hash && modalId != '') {
                    var elem = $(this),
						mask = elem.find('.modal-screen');
                    $(this).addClass('is-active');
					//mask.fadeIn(400);
                    $('body').addClass('modal-is-active');
                    $('html, body').animate({
                        scrollTop: elem.offset().top
                    }, 0 );
                }
            });
        });

	}

}

module.exports = ClickFunctions;
