import PdfItem from './pdf-item';

export default PdfItem.extend({
  actions: {
    fileSelected: function (property, file) {
      let model = this.get('model');
      if (!file) {
        if (property === 'model.preview') {
          this.set('previewPreview', null);
        }
        return this.set(property, null);
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
        let date = new Date(file.name
          .replace(/[-–—_]/g, '/')
          .replace(/[^0-9\/]/g, '')
          .replace(/^\//, '')
          .replace(/\/$/, '')
        );

        // Only set the date if it hasn't already been set manually
        if (model.changedAttributes().from) {
          if (!isNaN(date.getDate()) && date.getFullYear() - new Date().getFullYear() <= 1) {
            model.set('from', date);
          }
        }
      }
    }
  }
});
