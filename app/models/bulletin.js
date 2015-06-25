/* global moment */

import DS from 'ember-data';
import Ember from 'ember';
import fileAPI from '../utils/file-api';

export default DS.Model.extend({
  date: DS.attr('date'),
  service: DS.attr('string'),
  lectionary: DS.attr('string'),
  liturgicalDay: DS.attr('string'),
  visible: DS.attr('boolean'),
  file: DS.attr('string'),
  preview: DS.attr('string'),
  
  fileURL: fileAPI('file'),
  previewURL: fileAPI('preview'),
  
  formattedDate: Ember.computed('date', {
    get() {
      return moment(this.get('date')).format('MMMM D, YYYY');
    }
  })
  
});
