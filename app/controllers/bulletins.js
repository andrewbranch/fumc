/* global moment */

import Ember from 'ember';
import BufferedProxy from 'ember-buffered-proxy/proxy';
import modelIsNew from '../utils/model-is-new';

export default Ember.Controller.extend({
  buffered: Ember.computed('model.[]', 'model.@each.date', {
    get() {
      return this.get('model').map(b => BufferedProxy.create({ content: b }));
    }
  }),
  
  bulletins: Ember.computed('buffered.@each.content.date', {
    get() {
      return this.get('buffered').sort((a, b) => {
        if (modelIsNew(a) && !modelIsNew(b)) {
          return -1;
        } else if (modelIsNew(b) && !modelIsNew(a)) {
          return 1;
        }
        
        let aDate = a.get('content.date'),
            bDate = b.get('content.date');
        return new Date(bDate) - new Date(aDate);
      });
    }
  }),
  
  actions: {
    newBulletin: function () {
      this.store.createRecord('bulletin', {
        date: moment().startOf('week').add(1, 'week')
      });
    }
  }
});
