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

     @class Backgrid.Extension.Infinator
  */
  Backgrid.Extension.Infinator = Backgrid.Footer.extend({

    /** @property */
    className: "infinator",

    /** @property */
    throttleWait: 100,

    initialize: function (options) {
      Backgrid.Footer.prototype.initialize.call(this, options);

      var collection = this.collection.pageableCollection;

      $(window).scroll(_.throttle(function() {
        var docHeight = $(document).height();
        var viewportHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        if (viewportHeight + scrollTop > docHeight - 100 &&
            collection.links[collection.state.currentPage + 1]) {
          collection.getNextPage();
        }

      }, this.throttleWait));
    }
  });

}(jQuery, _, Backbone, Backgrid));
