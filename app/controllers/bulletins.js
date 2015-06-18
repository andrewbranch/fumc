/* global moment */

import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		newBulletin: function () {
			this.store.createRecord('bulletin', {
				date: moment().startOf('week').add(1, 'week')
			});
		},
		
		toggleEditingBulletin: function(bulletin) {
			bulletin.toggleProperty('editing')
		},
		
		cancelEditingBulletin: function(bulletin) {
      if (bulletin.get('currentState.stateName') === 'root.loaded.created.uncommitted') {
        bulletin.destroyRecord();
      } else {
        bulletin.rollback();
        bulletin.set('editing', false);
      }
		},
		
		deleteBulletin: function(bulletin) {
			bulletin.remove();
		},
		
		saveBulletin: function(bulletin) {
			bulletin.save().then(() => {
				Ember.run.later(() => {
					bulletin.set('editing', false);
				}, 600);
			});
		},
		
		fileUploadedForBulletin: function(file, bulletin, property) {
			bulletin.set(property, file.name);
		},
		
		fileSelectedForBulletin: function(file, bulletin, property) {
			if (property === 'file') {
	      var date = new Date(file.name
	        .replace(/[-–—_]/g, '/')
	        .replace(/[^0-9\/]/g, '')
	        .replace(/^\//, '')
	        .replace(/\/$/, '')
	      );
				
				// TODO check out new changedProperties feature or something
	      if (moment(bulletin.get('initialDate')).isSame(bulletin.get('date'), 'day')) { // Only do it if it hasn't been changed manually
	        if (!isNaN(date.getDate()) && date.getFullYear() - new Date().getFullYear() <= 1) { // Sanity check
	          this.set('date', date);
	        }
	      }

	      if (!this.get('service')) {
	        if (~file.name.toLowerCase().indexOf('icon')) {
	          this.set('service', 'ICON');
	        } else if (date.getDay() === 0) {
	          this.set('service', 'Traditional services');
	        }
	      }
	    }
		}
	}
});
