(function(){
  'use strict';

  $(document).ready(function(){
    $('.content').prepend(JST.c.index());
    $('.content').prepend(JST.c.post());
  });
})();
