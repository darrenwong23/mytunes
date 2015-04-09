// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td><span>(<%= artist %>)<%= title %></td><td>  </span><span class="remove">xxx<span></td>'),

  events: {
    'click .remove': function() {
      this.model.dequeue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
