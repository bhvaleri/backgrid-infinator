/*
  backgrid-infinator
  https://github.com/bhvaleri/backgrid-infinator

  Copyright (c) 2013 Bill Valeriote
  Licensed under the MIT @license.
*/

(function ($, _, Backbone, Backgrid) {

  "use strict";

  /**
     Infinator is footer element that allows for "infinite scroll" until the
     data runs out.

     The optional Scroll to Top overlay assume that there is only 1 element 
     with an infinite-container class.

     @class Backgrid.Extension.Infinator
  */
  Backgrid.Extension.Infinator = Backgrid.Footer.extend({

    /** @property */
    className: "infinator",

    /** @property */
    throttleWait: 100,

    /** @property */
    scrollToTop: false,

    __toTopShowing: false,

    initialize: function (options) {
      Backgrid.Footer.prototype.initialize.call(this, options);

      var collection = this.collection.pageableCollection;

      this.scrollToTop && this.initializeToTop();

      $(window).scroll(_.throttle(function() {
        var docHeight = $(document).height();
        var viewportHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var containerTop = $('.infinite-container').position().top;

        if (viewportHeight + scrollTop > docHeight - 100 &&
            collection.links[collection.state.currentPage + 1]) {
          collection.getNextPage();
        }
      }, this.throttleWait));
  
      if (this.scrollToTop) { 

        $(window).scroll(_.bind(function () {
          var scrollTop = $(window).scrollTop();
          var containerTop = $('.infinite-container').position().top;

          if ((scrollTop > containerTop) && !this._toTopShowing) {
            this.showToTop();
          }

          if ((scrollTop < containerTop) && this._toTopShowing) {
            this._toTopShowing = false;
            $('.to-top').animate({ bottom: '-100px' });
          }
        }, this));
      }
    },

    initializeToTop: function () {
      $('.infinite-container').append('<button class="to-top">Scroll to Top</button>');

      var containerTop = $('.infinite-container').position().top;

      $('.to-top').click(_.bind(function () {
          $('body').animate({ scrollTop: containerTop },
            _.bind(function () { this._toTopShowing = false; }, this));
          $('.to-top').animate({ bottom: '-100px' });
        }, this));
    },

    showToTop: function () {
      this._toTopShowing = true;
      $('.to-top').animate({ bottom: 0});
    }
  });

}(jQuery, _, Backbone, Backgrid));
