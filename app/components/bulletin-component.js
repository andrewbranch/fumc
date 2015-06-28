import Ember from 'ember';
const { and, not, equal } = Ember.computed;

export default Ember.Component.extend({
  
  classNames: ['item', 'pdf-item'],
  classNameBindings: ['editing'],
  
  init: function() {
    this._super();
    this.set('numberOfFileUploading', 0);
    // Start editing right away!
    if (this.get('model.currentState.stateName') === 'root.loaded.created.uncommitted') {
      this.set('editing', true);
    }
  },
  
  didInsertElement: function() {
    this.$('.ui.checkbox').checkbox();
  },
  
  isUploading: equal('numberOfFileUploading', 0),
  shouldSave: Ember.computed('isUploading', 'model.isDirty', {
    get() {
      return !this.get('isUploading') && this.get('model.isDirty');
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
        Ember.run.later(() => {
          this.set('editing', false);
        }, 600);
      });
    },
    fileUploaded: function(property, file, key) {
      this.set(property, key);
      this.decrementProperty('numberOfFileUploading');
    },
    fileUploadStarted: function() {
      this.incrementProperty('numberOfFileUploading');
    },
    fileSelected: function(property, file) {
      let model = this.get('model');
      if (!file) {
        return this.set(property, null);
        if (property === 'preview') {
          this.set('previewPreview', null);
        }
      }
      
      if (property === 'model.preview') {
        if (file.type.startsWith('image')) {
          let reader = new FileReader();
          reader.onload = e => {
            this.set('previewPreview', e.target.result);
          };
          reader.readAsDataURL(file);
        }
      } else if (property === 'model.file') {
        // Make some semi-intelligent guesses
        // about how the filename might look
        // so we can try to parse out the date
        var date = new Date(file.name
          .replace(/[-–—_]/g, '/')
          .replace(/[^0-9\/]/g, '')
          .replace(/^\//, '')
          .replace(/\/$/, '')
        );
        
        // Only set the date if it hasn't already been set manually
        if (model.changedAttributes().date) {
          if (!isNaN(date.getDate()) && date.getFullYear() - new Date().getFullYear() <= 1) { // Sanity check
            this.set('date', date);
          }
        }

        if (!model.get('service')) {
          if (~file.name.toLowerCase().indexOf('icon')) {
            model.set('service', 'ICON');
          } else if (date.getDay() === 0) {
            model.set('service', 'Traditional services');
          }
        }
      }
    }
  }
});
