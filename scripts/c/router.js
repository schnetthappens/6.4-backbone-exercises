import {PostCollection} from './models/post';
import IndexView from './views/index';
// import postView from './views/post';

var Router = Backbone.Router.extend ({

  routes: {
    '': 'index'
  },

  initialize: function() {
  this.posts = new PostCollection();
  this.posts.fetch();
  console.log(this.posts);

  this.indexView = new IndexView({collection: this.posts});
  $('.content').prepend(this.indexView.el);

  },

  index: function(){
    console.log('hi');
  }


});

export default new Router();
