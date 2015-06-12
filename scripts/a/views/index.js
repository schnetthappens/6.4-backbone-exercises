
export default Backbone.View.extend ({
  tagName: 'form',
  className: 'post-form',
  template: JST.a.index,

  events: {
    'click .submit-post': 'addPost'
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
    var title = this.$('.post-title').val();
    var body = this.$('.post-content').val();
    this.model.set({title: title, body: body});
    console.log(this.model.get('title'));

  }
});
