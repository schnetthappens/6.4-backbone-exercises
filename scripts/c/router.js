import {PostCollection} from './models/post';
import IndexView from './views/index';


var Router = Backbone.Router.extend ({

  routes: {
    '': 'index'
  },

  initialize: function() {
      this.posts = new PostCollection();

      //Gets post and creates a new with the collection passed to it
      this.posts.fetch().then(function(){
          this.indexView = new IndexView({collection: this.posts});
            $('.content').append(this.indexView.el);
            //use bind in order to access promise that's returned from fetch
      }.bind(this));

  },

  index: function(){
    // console.log('hi');
  }


});

export default new Router();
