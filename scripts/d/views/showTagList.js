export default Backbone.View.extend({
  template: JST.d.tags,

  tagName: 'section',
  className: 'link-list',

  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
    // console.log('working');
  }
});
