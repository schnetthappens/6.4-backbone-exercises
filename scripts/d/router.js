
var Router = Backbone.Router.extend({

  routes: {
    '': 'index'
  },

  initialize: function() {
    $('.content').append(JST.d.links());
    $('.content').append(JST.d.tags());
    $('.content').append(JST.d.form());

  },

  index: function(){



  }


});

var router = new Router();

export default router;
