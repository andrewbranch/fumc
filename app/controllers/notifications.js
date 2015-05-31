/* global moment, Cookies */

import Ember from 'ember';
import config from '../config/environment';

export default Ember.ObjectController.extend({
  
  tokenEnvironment: 'ZEROPUSH_PROD_TOKEN',

  init: function () {
    window.controller = this;
  },

  expirationDateIsValid: function () {
    var exp = this.get('expirationDate');
    return exp && moment(exp).isValid() && exp > Date.now();
  }.property('expirationDate'),

  messageIsValid: function () {
    return (this.get('message') || '').trim().length;
  }.property('message'),

  urlIsValid: true,
  isValid: Ember.computed.and('expirationDateIsValid', 'messageIsValid', 'urlIsValid'),

  actions: {
    test: function () {
      this.send('send', true);
    },

    send: function (test) {
      var self = this;
      this.set('loading', true);
      if (this.get('isValid') && confirm('This will be sent immediately to every person who has downloaded the app and accepted push notifications, and cannot be undone.')) {
        this.set('sendDate', new Date());
        this.set('test', test);
        var model = this.get('model');
        model.save().then(function () {
          Ember.$.ajax({
            url: config.APP.proxy + (test === true ? '/api/v3/notify/testers' : '/api/v3/notify/everyone'),
            type: 'POST',
            contentType: 'application/json; charset=utf8',
            data: JSON.stringify({
              notification: model.toJSON({ includeId: true }),
              tokenEnvironment: self.get('tokenEnvironment')
            }),
            beforeSend: function (xhr) {
              xhr.setRequestHeader('token', Cookies.get('token'));
            }
          }).done(function () {
            alert('Notification sent.');
            self.set('loading', false);
            if (!test) {
              self.send('refresh');
            }
          }).fail(function () {
            alert('Notification failed to send. Deleting from server.');
            model.destroyRecord();
          });
        }, function (reason) {
          alert('Notification failed to save to server. Will not send.');
          console.error(reason);
          self.set('loading', false);
        });
      }
    }
  }

});
