
export default Backbone.View.extend ({
    template: JST.c.index,

    initialize: function(){
      this.render();
    },

    render: function(){
      this.$el.html(this.template());
    }
  });
