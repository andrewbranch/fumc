/* global moment */

import Ember from 'ember';
import PDFSController from './pdfs';

export default PDFSController.extend({

	actions: {

		newBulletin: function () {
			this.store.createRecord('bulletin', {
				date: moment().startOf('week').add(1, 'week')
			});
		}

	}
});
