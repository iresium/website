'use strict';

const $ = require('jquery');

class Tabs {

	constructor( options ) {

		//setup any defaults
		this.defaults = {};

		//merge options with defaults
		this.settings = $.extend( true, {}, this.defaults, options );

		if( $('.tabs').length ) {
			this.events();
        } else {
            return;
        }
	}

	events() {

		var tab = $('.tabs__tabs > *'),
        	tabBody = $('.tabs__content > *');

        tab.on('click touchstart:not(touchmove)', function() {
            var activeTab = $(this).attr('data-tabs-tab'),
            	tabGroup = $(this).parents('.tabs');

            tabGroup.find('.tabs__tabs > *').removeClass('is-active');
            $(this).addClass('is-active');

            tabGroup.find('*[data-tabs-body]').each(function() {
                if($(this).attr('data-tabs-body') == activeTab) {
					if($(this).parents('.tabs__content').length > 0){
						$(this).fadeIn(200).addClass('is-active');
					} else {
						$(this).show(0).addClass('is-active');
					}
                } else {
                    $(this).hide().removeClass('is-active');
                }
            });
        }); // End click

	}

}

module.exports = Tabs;
