import IndexView from 'a/views/index';

(function(){
  'use strict';

  $(document).ready(function(){
    var indexView = new IndexView();
    $('.content').prepend(indexView.el);
  });
})();
