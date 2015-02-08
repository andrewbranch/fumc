import Ember from 'ember';

export default Ember.Component.extend({

  oldFile: null,
  currentFile: null,
  input: null,


  didInsertElement: function () {
    var component = this,
        input = component.get('element').querySelector('input[type=file]');

    if (!this.get('currentFile')) {
      component.set('currentFile', this.get('oldFile'));
    }

    input.addEventListener('change', function () {
      var file = this.files[0];
      component.set('currentFile', file.name);
      component.sendAction('change', file);
    }, false);

    this.set('input', input);
  },

  actions: {
    replace: function () {
      this.set('currentFile', null);
      this.sendAction('change', null);
    },
    triggerClick: function () {
      this.get('input').click();
    }
  }
});