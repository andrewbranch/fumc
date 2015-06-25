/* global moment */

import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';
const { Promise } = Ember.RSVP;

export default DS.Model.extend({
  date: DS.attr('date'),
  service: DS.attr('string'),
  lectionary: DS.attr('string'),
  liturgicalDay: DS.attr('string'),
  visible: DS.attr('boolean'),
  file: DS.attr('string'),
  screenshot: DS.attr('string'),
  
  fileURL: Ember.computed('file', {
    get() {
      return config.host + '/' + config.namespace + '/file/' + this.get('file');
    }
  }),
  
  formattedDate: Ember.computed('date', {
    get() {
      return moment(this.get('date')).format('MMMM D, YYYY');
    }
  })
  
});
