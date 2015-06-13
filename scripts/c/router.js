import IndexView from './views/index';
// import postView from './views/post';

var Router = Backbone.Router.extend ({

  routes: {
    '': 'index'
  },

  initialize: function() {
  this.indexView = new IndexView();
  $('.content').prepend(this.indexView.el);
  },

  index: function(){
    console.log('hi');
  }


});

export default new Router();
