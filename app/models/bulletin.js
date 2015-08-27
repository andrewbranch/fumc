/* global moment */

import DS from 'ember-data';
import Ember from 'ember';
import UUID from 'npm:node-uuid';
import fileAPI from '../utils/file-api';

export default DS.Model.extend({
  date: DS.attr('date'),
  service: DS.attr('string'),
  description: DS.attr('string'),
  liturgicalDay: DS.attr('string'),
  visible: DS.attr('boolean', { defaultValue: true }),
  file: DS.attr('string'),
  preview: DS.attr('string'),
  
  fileURL: fileAPI('file'),
  previewURL: fileAPI('preview'),
  
  init() {
    this.set('_clientId', UUID.v1());
    this._super();
  },
  
  formattedDate: Ember.computed('date', {
    get() {
      return moment(this.get('date')).format('MMMM D, YYYY');
    }
  })
  
});
