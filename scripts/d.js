// import Router from './c/router';

(function(){
  'use strict';

  $(document).ready(function(){
    $('.content').append(JST.d.links());
    $('.content').append(JST.d.tags());
    $('.content').append(JST.d.form());
  });
})();
