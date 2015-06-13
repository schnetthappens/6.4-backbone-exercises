// import Router from '../scripts/c';

(function(){
  'use strict';

  $(document).ready(function(){
    Backbone.history.start();
    $('.content').prepend(JST.c.index());
    $('.content').prepend(JST.c.post());
  });
})();
