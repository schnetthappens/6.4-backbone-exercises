(function(){
  'use strict';

  $(document).ready(function(){
    backbone.history.start();
    $('.content').prepend(JST.c.index());
    $('.content').prepend(JST.c.post());
  });
})();
