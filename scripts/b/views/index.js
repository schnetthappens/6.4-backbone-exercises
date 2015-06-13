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
    var first = this.$('.first-name').val();
    var last = this.$('.last-name').val();
    var address = this.$('.address').val();
    var phone = this.$('.phone-number').val();
    this.model.set({first: first, last: last, address: address, phone: phone});
    this.model.save();
    this.render();
  }
});
