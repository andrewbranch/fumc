/* global amazon */

import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['access_token'],

  actions: {
    login: function () {
      var options = { scope: 'profile' };
      amazon.Login.authorize(options, '/#/authenticate');
    }
  }

});
