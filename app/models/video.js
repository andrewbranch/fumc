import DS from 'ember-data';
import computed from 'ember-computed-decorators';
const { attr } = DS;

export default DS.Model.extend({
  name: attr('string'),
  uri: attr('string'),
  link: attr('string'),
  duration: attr('number'),
  width: attr('number'),
  height: attr('number'),
  date: attr('date'),
  pictures: attr(),
  fileHD: attr('string'),
  visible: attr('boolean'),
  
  @computed('pictures')
  smallThumbnailURL(pictures) {
    if (!pictures || !pictures.length) {
      return null;
    }
    
    return pictures[0].link;
  }
});
