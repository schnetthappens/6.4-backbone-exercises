export default Backbone.View.extend ({
  tagName: 'form',
  className: 'user-form',
  template: JST.b.index,

  events: {
    'click .submit': 'addPost'
  },

  initialize: function(){
  this.render();
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  addPost: function(e){
    e.preventDefault();
    console.log('hello');
  }
});
