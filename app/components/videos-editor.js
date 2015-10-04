import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({
  
  classNames: ['videos-editor'],
  
  @computed('albums')
  sortedAlbums(albums) {
    return albums.toArray().sort((a, b) => {
      if (!a.get('featured') && b.get('featured')) {
        return 1;
      } else if (!b.get('featured') && a.get('featured')) {
        return -1;
      }
      
      if (!a.get('visible') && b.get('visible')) {
        return 1;
      } else if (!b.get('visible') && a.get('visible')) {
        return -1;
      }
      
      if (a.get('name') > b.get('name')) {
        return 1;
      } else if (b.get('name') > a.get('name')) {
        return -1;
      }
      
      return 0;
    })
  },
  
  actions: {
    save(model) {
      model.save().catch(err => {
        alert('Failed to save: ' + err);
      });
    }
  }
  
});
