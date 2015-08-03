import Ember from 'ember';

export default Ember.Controller.extend({

  calendarURL: function () {
    return Ember.String.htmlSafe('webcal://api.fumcpensacola.com/v3/ical/' + encodeURIComponent(this.get('calendarName') || '') + '.ics');
  }.property('calendarName')

});
