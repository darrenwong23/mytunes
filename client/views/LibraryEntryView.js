// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><span class="click">(<%= artist %>)<%= title %></td><td>  </span><span class="queue"> +++</span></td> '),

  events: {
    'click .click': function() {

      this.model.play()
      //queues clicked song


    },
    'click .queue': function() {
      // this.model.play();
      this.model.enqueue();
      //queues clicked song
    }


  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
