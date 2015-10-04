import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  beforeModel: function (transition) {
    var token = transition.queryParams.access_token;
    if (token) {
      Ember.$.post(config.host + '/' + config.namespace + '/authenticate', { access_token: token }).then(function (response) {
        if (response.success) {

          var applicationController = this.controllerFor('application'),
              attemptedTransition = localStorage.getItem('missionControlTransition');
          applicationController.setProperties({
            name: response.name,
            email: response.email,
            token: response.token
          });

          if (attemptedTransition) {
            this.transitionTo(attemptedTransition);
            localStorage.removeItem('missionControlTransition');
          } else {
            this.transitionTo('index');
          }
        } else {
          this.transitionTo('unauthorized');
        }
      }.bind(this), function () {
        this.transitionTo('unauthorized');
      }.bind(this));
    }
  }
});
