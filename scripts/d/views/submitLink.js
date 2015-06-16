
export default Backbone.View.extend({
  template: JST.d.form,

  tagName: 'form',
  className: 'link-form',

  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
    // console.log('working');
  }
});
