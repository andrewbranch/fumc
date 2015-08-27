import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    Ember.$('body').addClass('index');
  },
  deactivate: function() {
    Ember.$('body').removeClass('index');
  },
});
