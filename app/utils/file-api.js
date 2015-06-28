import Ember from 'ember';
import config from '../config/environment';

export default function fileAPI(property) {
  return Ember.computed(property, {
    get() {
      return config.host + '/' + config.namespace + '/file/' + this.get(property);
    }
  });
}
