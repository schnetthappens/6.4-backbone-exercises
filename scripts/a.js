
import Post from 'a/models/post';
import IndexView from 'a/views/index';

(function(){
  'use strict';

  $(document).ready(function(){
    var postModel = new Post();
    var indexView = new IndexView({model: postModel});
    $('.content').prepend(indexView.el);
  });
})();
