/*
  backgrid-infinator

  Copyright (c) 2013 Bill Valeriote
  Licensed under the MIT @license.
*/

(function ($, _, Backbone, Backgrid) {

  "use strict";

  /**
     Infinator is footer element that allows for "infinite scroll" until the data runs out.

     @class Backgrid.Extension.Infinator
  */
  Backgrid.Extension.Infinator = Backgrid.Footer.extend({

    /** @property */
    className: "infinator",

    /** @property */
    rowsToFetch: 10,

    initialize: function (options) {
      Backgrid.Footer.prototype.initialize.call(this, options);

      var collection = this.collection;
      var rowsToFetch = this.rowsToFetch;
       
      $(window).scroll(function() {
        var doc = $(document).height();
        var win = $(window).height();
        var scroll = $(window).scrollTop();

        if (win + scroll > doc - 100){
          var currentSize = collection.state.pageSize;
          collection.setPageSize(currentSize + rowsToFetch); 
        };
        
      });
    }
  });

}(jQuery, _, Backbone, Backgrid));