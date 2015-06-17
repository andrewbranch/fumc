import DS from 'ember-data';

export default DS.Model.extend({
  from: DS.attr('date'),
  to: DS.attr('date'),
  description: DS.attr('description'),
  volume: DS.attr('number'),
  issue: DS.attr('number'),
  visible: DS.attr('boolean'),
  file: DS.attr('string'),
  screenshot: DS.attr('string')
});
