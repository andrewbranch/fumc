import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';

export default DS.Model.extend({
  from: DS.attr('date'),
  to: DS.attr('date'),
  description: DS.attr('description'),
  volume: DS.attr('number'),
  issue: DS.attr('number'),
  visible: DS.attr('boolean'),
  file: DS.attr('string'),
  preview: DS.attr('string'),
  
  fileURL: Ember.computed('file', {
    get() {
      return config.host + '/' + config.namespace + '/' + this.get('file');
    }
  })
});
