import Ember from 'ember';
import fileApi from '../../../utils/file-api';
import { module, test } from 'qunit';

module('Unit | Utility | file api');

// Replace this with your real tests.
test('it works', function(assert) {
  var Obj = Ember.Object.extend({
    filename: 'blat',
    url: fileApi('filename')
  });
  
  let obj = new Obj();
  
  assert.ok(obj.get('url').length > 4);
  assert.ok(obj.get('url').indexOf('blat') > -1);
});
