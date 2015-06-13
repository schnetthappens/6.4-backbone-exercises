
var User = Backbone.Model.extend ({
  urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/johnBlog',
  idAttribute: '_id',
  defaults: {
    first: '',
    last: '',
    address: '',
    phone: ''
  }
});

export default User;
