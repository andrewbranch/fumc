import Ember from 'ember';
import DS from 'ember-data';
import fileAPI from '../utils/file-api';

export default DS.Model.extend({
  from: DS.attr('date'),
  to: DS.attr('date'),
  description: DS.attr('string'),
  volume: DS.attr('number'),
  issue: DS.attr('number'),
  visible: DS.attr('boolean'),
  file: DS.attr('string'),
  preview: DS.attr('string'),
  
  fileURL: fileAPI('file'),
  previewURL: fileAPI('preview'),
  
  formattedDateRange: Ember.computed('from', 'to', {
    get() {
      return moment(this.get('from')).format('MMMM D') + " – " + moment(this.get('to')).format('MMMM D, YYYY');
    }
  }),
  
  updateVolume: Ember.observer('to', function() {
    this.set('volume', moment(this.get('from')).year() - 1820);
  }),

  updateTo: Ember.observer('from', function() {
    this.set('to', moment(this.get('from')).add(1, 'weeks').endOf('week').startOf('day'));
  }),
});
