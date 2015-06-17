import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  service: DS.attr('string'),
  lectionary: DS.attr('string'),
  liturgicalDay: DS.attr('string'),
  visible: DS.attr('boolean'),
  file: DS.attr('string'),
  screenshot: DS.attr('string')
});
