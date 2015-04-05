var orm = require('orm');

module.exports = function (db) {
  return db.define('witness', {
    id: { type: 'serial', key: true },
    from: { type: 'date', time: true },
    to: { type: 'date', time: true },
    volume: { type: 'number' },
    issue: { type: 'number' },
    visible: { type: 'boolean' },
    file: { type: 'text' }
  }, {
    autoFetch: true,
    cache: false,
    validations: {
      from: orm.enforce.required('From date is required'),
      to: orm.enforce.required('To date is required'),
      volume: orm.enforce.required('Volume is required'),
      issue: orm.enforce.required('Issue is required')
    }
  });
};