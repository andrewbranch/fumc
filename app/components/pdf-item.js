import Ember from 'ember';
const { not } = Ember.computed;

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
      this.toggleProperty('editing')
    },
    cancelEditing: function() {
      let model = this.get('model');
      if (model.get('currentState.stateName') === 'root.loaded.created.uncommitted') {
        model.destroyRecord();
      } else {
        model.rollback();
        this.set('editing', false);
      }
    },
    save: function() {
      let model = this.get('model');
      model.save().then(() => {
        this.set('editing', false);
      });
    },
    fileUploaded: function(property, file, key) {
      this.set(property, key);
      this.decrementProperty('numberOfFilesUploading');
    },
    fileUploadStarted: function() {
      this.incrementProperty('numberOfFilesUploading');
    }
  }
});
