
import {Link, LinkCollection} from './models/link';
import ShowTagListView from './views/showTagList';
import ShowLinkListView from './views/showLinkList';
import SubmitLinkView from './views/submitLink';

var Router = Backbone.Router.extend({

  routes: {
    '': 'index'
  },

  initialize: function() {
    this.submitLinkView = new SubmitLinkView();
    $('.content').append(this.submitLinkView.el);

    this.showLinkList = new ShowLinkListView();
    $('.content').append(this.showLinkList.el);

    this.showTagList = new ShowTagListView();
    $('.content').append(this.showTagList.el);

  },

  index: function(){



  }


});

var router = new Router();

export default router;
