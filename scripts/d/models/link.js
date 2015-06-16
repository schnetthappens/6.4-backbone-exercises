
var Link = Backbone.Model.extend ({
  idAttribute: '_id',
  defaults: {
    url: '',
    title: '',
    tags: ''
  }
});

var LinkCollection = Backbone.Collection.extend({
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/johnBlog',
  model: Link
});

export default {Link, LinkCollection};
