
var Post = Backbone.Model.extend({

  defaults: function(){
    return {
      created_at: '',
      title: '',
      body: ''
    };

  },

  idAttribute: '_id'


});

var PostCollection = Backbone.Collection.extend({
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts',
  model: Post
});

export default {Post, PostCollection};
