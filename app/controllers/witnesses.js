/* global moment */

import Ember from 'ember';
import BufferedProxy from 'ember-buffered-proxy/proxy';
import modelIsNew from '../utils/model-is-new';

export default Ember.Controller.extend({
  buffered: Ember.computed('model.[]', 'model.@each.from', {
    get() {
      return this.get('model').map(w => BufferedProxy.create({ content: w }));
    }
  }),
  
  witnesses: Ember.computed('buffered.@each.content.from', {
    get() {
      return this.get('buffered').sort((a, b) => {
        if (modelIsNew(a) && !modelIsNew(b)) {
          return -1;
        } else if (modelIsNew(b) && !modelIsNew(a)) {
          return 1;
        }
        
        let aDate = a.get('content.from'),
            bDate = b.get('content.from');
        return new Date(bDate) - new Date(aDate);
      });
    }
  }),
  
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
