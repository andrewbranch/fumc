/* global moment */

import Ember from 'ember';

export default Ember.Controller.extend({
  
  actions: {

    newWitness: function () {
      this.store.createRecord('witness', {
        from: moment().add(1, 'weeks').startOf('week'),
        to: moment().add(1, 'weeks').endOf('week').startOf('day'),
        volume: moment().add(1, 'weeks').startOf('week').year() - 1820
      });
    }

  }

});
