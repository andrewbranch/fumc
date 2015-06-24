import Ember from 'ember';
import AWS from '../utils/aws';
import FileUpload from '../models/file-upload';
import config from '../config/environment';

export default Ember.ObjectController.extend({
  
  editing: false,
  needs: ['pdfs'],
  
  actions: {
    
    toggleEditing: function () {
      this.toggleProperty('editing');
    },
    
    cancel: function () {
      var model = this.get('model');
      if (~this.get('currentState.stateName').indexOf('created.uncommitted')) {
        model.destroyRecord();
      } else {
        model.rollback();
        this.set('editing', false);
      }
    },

    remove: function () {
      var file = this.get('file');
      if (file) {
        AWS.s3.deleteObject({ Key: file }).send();
      }
      this.get('model').destroyRecord();
    },
    
    save: function () {
      var fileUpload = this.get('fileUpload'),
          model = this.get('model'),
          oldFile = this.get('file'),
          saved = function () {
            setTimeout(function () { this.set('editing', false); }.bind(this), 600);
          }.bind(this);

      if (fileUpload && fileUpload.isUploading) {
        return false;
      }
      
      if (fileUpload) {
        if (fileUpload.name !== oldFile) {
          AWS.s3.deleteObject({ Key: oldFile }).send();
        }
        fileUpload.uploadFile().then(function (key) {
          this.set('file', key);
          model.save().then(saved);
        }.bind(this));
      } else {
        model.save().then(saved);
      }
    },
    
    fileSelected: function (file) {
      this.set('currentFile', file.name);
      this.set('fileUpload', FileUpload.create({
        fileToUpload: file
      }));
    }
    
  }
});
