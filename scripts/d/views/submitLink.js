
export default Backbone.View.extend({
  template: JST.d.form,

  tagName: 'form',
  className: 'link-form',

  events: {
    'click .submit-link': 'addLink'
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  addLink: function(e){
    e.preventDefault();
    var url = this.$('.link-url').val();
    var title = this.$('.link-title').val();
    var tags = this.$('.link-tags').val();
    console.log(url);
    // this.model.set({url: url, title: title, tags: tags});
    // this.model.save();
    // this.render();
  }
});
