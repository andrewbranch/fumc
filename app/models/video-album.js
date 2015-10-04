import DS from 'ember-data';
import computed from 'ember-computed-decorators';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  uri: attr('string'),
  description: attr('string'),
  link: attr('string'),
  visible: attr('boolean'),
  featured: attr('boolean'),
  videosURI: attr('string'),
  videos: hasMany('video'),
  
  @computed('videos', 'videos.@each.date')
  videosByDateDescending(videos) {
    return videos.toArray().sort((a, b) => b.get('date') - a.get('date'));
  }
});
