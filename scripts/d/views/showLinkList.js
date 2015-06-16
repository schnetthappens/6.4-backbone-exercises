export default Backbone.View.extend({
  template: JST.d.links,

  tagName: 'section',
  className: 'tags-list',

  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
    // console.log('working');
  }
});
