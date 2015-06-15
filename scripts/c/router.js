
import {PostCollection} from './models/post';
import IndexView from './views/index';
import ShowView from './views/read';


var Router = Backbone.Router.extend ({

  routes: {
    '': 'index',
    ':id': 'show'
  },

  initialize: function() {
      this.posts = new PostCollection();
      this.fetchPostsPromise = this.posts.fetch();

      //creates new IndexView
      this.indexView = new IndexView({collection: this.posts});
        $('.content').append(this.indexView.el);
  },

  index: function(){
  },

  show: function(id){
    this.fetchPostsPromise.then(function(){
      var post = this.posts.get(id);
      // console.log(post);
      this.showView(new ShowView({model: post}));
    }.bind(this));
  },



//Helper functions

  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('.content').append(view.el);
    return view;
  }

});

export default new Router();
