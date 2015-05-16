var mongoose = require('mongoose'),
    request = require('request'),
    moment = require('moment'),
    Calendar = require('./calendar'),
    ACS_USERNAME = process.env.ACS_USERNAME,
    ACS_PASSWORD = process.env.ACS_PASSWORD,
    ACS_SITENUMBER = process.env.ACS_SITENUMBER,
    NODE_ENV = process.env.NODE_ENV;

var schema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  location: { type: String },
  calendar: { type: String, ref: 'Calendar' }
}, {
  autoIndex: NODE_ENV !== 'production'
});

schema.statics.scrape = function (start, end, page) {
  var Event = this;
  return new Promise(function (resolve, reject) {
    var url = 'https://secure.accessacs.com/api_accessacs_mobile/v2/' + ACS_SITENUMBER + '/events';
    page = page || 0;
    request(url, {
      json: true,
      auth: {
        user: ACS_USERNAME,
        pass: ACS_PASSWORD
      },
      qs: {
        startdate: moment(start).format('L'),
        stopdate: moment(end).format('L'),
        pageIndex: page,
        pageSize: 500 // Max 500
      }
    }, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        var pages = [];
        
        // Recur for other pages
        if (page === 0) {
          console.log(body, ACS_USERNAME, ACS_PASSWORD, ACS_SITENUMBER);
          pages = Array.apply(0, new Array(body.PageCount - 1)).map(function (x, i) {
            return Event.scrape(start, end, i + 1);
          });
        }
        
        Promise.all(body.Page.map(function (e) {
          return new Promise(function (res, rej) {
            e = Event.transform(e);
            var id = e._id;
            delete e._id;
            Event.update({ _id: id }, e, { upsert: true }, function (err, raw) {
              if (err) {
                rej(err);
              } else {
                res(e);
              }
            });
          });
        }).concat(pages)).then(function (events) {
          resolve([].concat.apply([], events));
        }, function (err) {
          reject(err);
        });
      }
    });
  });
};

schema.statics.transform = function (event) {
  var map = {
    Description: 'description',
    EventId: '_id',
    EventName: 'name',
    Location: 'location',
    StartDate: 'start',
    StopDate: 'end',
    CalendarId: 'calendar'
  }, e = { };
  
  for (var key in event) {
    if (map[key]) {
      e[map[key]] = event[key];
    }
  }
  
  return e;
};

module.exports = mongoose.model('Event', schema);