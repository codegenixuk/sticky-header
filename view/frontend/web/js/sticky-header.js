define(['uiComponent', 'jquery'], function (Component, $) {

    'use strict';

    return Component.extend({

        initialize: function (config, node) {

            this._super();

            let _this = this;

            const sticky = $('.page-header').offset().top;

            $(window).on('scroll', function(){

                if (window.scrollY > sticky) {
                    $('body').addClass("cg-sticky-header");
                } else {
                    $('body').removeClass("cg-sticky-header");
                }
            })

            return this;
        },

    });

});
