/* global Cookies */

import JsonApiAdapter from 'ember-json-api/json-api-adapter';
import config from '../config/environment';

export default JsonApiAdapter.extend({
  
  host: config.host,
  namespace: config.namespace,

  headers: function () {
    return {
      token: Cookies.get('token')
    };
  }.property().volatile()

});
