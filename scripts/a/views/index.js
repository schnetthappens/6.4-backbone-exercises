
export default Backbone.View.extend ({
  tagName: 'form',
  className: 'post-form',
  template: JST.a.index,

  initialize: function(){
  this.render();
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
