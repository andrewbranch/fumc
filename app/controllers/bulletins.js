/* global moment */

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newBulletin: function () {
      this.store.createRecord('bulletin', {
        date: moment().startOf('week').add(1, 'week')
      });
    }
  }
});
