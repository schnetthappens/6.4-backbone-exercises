import User from 'b/models/user';
import IndexView from 'b/views/index';

(function(){
  'use strict';

  $(document).ready(function(){
    var userModel = new User();
    var indexView = new IndexView({model: userModel});
    $('.content').prepend(indexView.el);
    // console.log();
  });
})();
