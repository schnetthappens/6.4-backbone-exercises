
var Post = Backbone.Model.extend ({
  urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/johnBlog',
  idAttribute: '_id',
  defaults: {
    title: '',
    body: ''
  }
});

export default Post;
