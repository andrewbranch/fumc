import Ember from 'ember';
import config from '../config/environment';
import AWS from '../utils/aws';
const TEST = config.environment === 'test';

export default Ember.Component.extend({

  didInsertElement: function () {
    let input = component.get('element').querySelector('input[type=file]');
    
    let change = event => {
      let file = TEST ? event.detail.file : event.target.files[0];
      this.set('file', file);
      this.set('needsUpload', true);
      this.sendAction('picked');
    };

    input.addEventListener('change', change, false);
    if (TEST) {
      input.addEventListener('test.file', change, false);
    }
    
    this.set('input', input);
  },

  actions: {
    replace: function () {
      this.set('file', null);
      this.set('needsUpload', false);
      this.sendAction('removed');
    },
    
    triggerClick: function () {
      this.get('input').click();
    },
    
    upload: function() {
      if (this.get('isUploading')) {
        return false;
      }
      
      let file = this.get('file'),
          key = file.name.replace(/(\..+?)$/, '_' + Date.now() + '$1');
      this.set('isUploading', true);
      AWS.s3.putObject({
        Key: key,
        ContentType: file.type,
        CacheControl: 'max-age=31536000',
        Body: file
      }, (err, data) => {
        this.set('isUploading', false);
        if (err) {
          return this.sendAction('failed', err);
        }
        
        this.set('needsUpload', false);
        this.set('initialFilename', key);
        this.sendAction('uploaded', file);
      }).on('httpUploadProgress', progress => {
        this.set('progress', progress.loaded / progress.total * 100);
      });
    }
  }
});
