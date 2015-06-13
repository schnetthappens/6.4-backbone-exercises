import IndexView from 'b/views/index';

(function(){
  'use strict';

  $(document).ready(function(){
    var indexView = new IndexView();
    $('.content').prepend(indexView.el);
  });
})();
