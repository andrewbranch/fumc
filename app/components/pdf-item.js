import Ember from 'ember';
import modelIsNew from '../utils/model-is-new';

export default Ember.Component.extend({
  
  classNames: ['item', 'pdf-item'],
  classNameBindings: ['editing'],
  
  init: function() {
    this._super();
    this.set('numberOfFilesUploading', 0);
    // Start editing right away!
    if (this.get('model.currentState.stateName') === 'root.loaded.created.uncommitted') {
      this.set('editing', true);
    }
  },
  
  didInsertElement: function() {
    this.$('.ui.checkbox').checkbox();
  },
  
  shouldSave: Ember.computed('numberOfFilesUploading', 'model.hasDirtyAttributes', {
    get() {
      return this.get('numberOfFilesUploading') === 0 && this.get('model.hasDirtyAttributes');
    }
  }),
  
  actions: {
    toggleEditing: function() {
      this.toggleProperty('editing');
    },
    cancelEditing: function() {
      if (modelIsNew(this.get('model.content'))) {
        this.get('model.content').destroyRecord();
      } else {
        this.get('model').discardBufferedChanges();
      }
      this.set('editing', false);
    },
    save: function() {
      this.get('model').applyBufferedChanges();
      this.get('model.content').save().then(() => {
        this.set('editing', false);
      });
    },
    fileUploaded: function(property, file, key) {
      this.set(property, key);
      this.decrementProperty('numberOfFilesUploading');
    },
    fileUploadStarted: function() {
      this.incrementProperty('numberOfFilesUploading');
    },
    remove: function() {
      if (modelIsNew(this.get('model.content')) || confirm('Permanently delete?')) {
        this.get('model.content').destroyRecord();
      }
    }
  }
});
