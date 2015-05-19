require('dotenv').config({ path: require('path').resolve(__dirname, '../../../.env') });

var assert = require('assert'),
    moment = require('moment-timezone'),
    server = require('../helpers/server'),
    db = require('../helpers/db'),
    Event = require('../../models/event');

describe('Event', function () {
  
  describe('scrape', function () {
    
    beforeEach(function () {
      server.create();
    });
    
    before(function (done) {
      db.connect().then(function () {
        db.clear();
        done();
      });
    });
    
    after(function () {
      server.destroy();
    });
    
    it('should resolve to all three pages of events', function (done) {
      Event.scrape(new Date('5/1/2015'), new Date('5/2/2015')).then(function (events) {
        assert.equal(events.length, 6);
        done();
      }, done).catch(done);
    });
    
    it('should work for only a single page of events', function (done) {
      Event.scrape(new Date('5/3/2015'), new Date('5/3/2015')).then(function (events) {
        assert.equal(events.length, 2);
        done();
      }, done).catch(done);
    });
    
    it('should insert events into the database', function (done) {
      Event.count({ }, function (err, count) {
        if (err) {
          return done(err);
        }
        assert.equal(count, 6);
        done();
      });
    });
    
    it('should update events on subsequent scrape', function (done) {
      Event.scrape(new Date('5/2/2015'), new Date('5/3/2015')).then(function (events) {
        assert.equal(events.length, 6);
        Event.count({ name: 'Weekend at Bernie’s' }, function (err, count) {
          if (err) {
            return done(err);
          }
          assert.equal(count, 1);
          done();
        });
      }, done).catch(done);
    });
    
  });
  
  describe('transform', function () {
    
    it('should transform an object’s whitelisted keys', function () {
      var e = Event.transform({ EventDateId: '1', EventName: 'Fun Times' });
      assert.equal(e._id, '1');
      assert.equal(e.name, 'Fun Times');
    });
    
    it('should optionally use a function to transform values', function () {
      var e = Event.transform({ StartDate: '5/1/2015 12:00 PM' });
      assert.ok(e.start instanceof Date);
    });
    
    it('should interpret times as CST', function () {
      var e = Event.transform({ StartDate: '2/1/2015 12:00 PM' });
      assert.equal(moment.tz(e.start, 'America/Chicago').format(), '2015-02-01T12:00:00-06:00');
    });
    
    it('should interpret times as CDT during daylight savings', function () {
      var e = Event.transform({ StartDate: '5/1/2015 12:00 PM' });
      assert.equal(moment.tz(e.start, 'America/Chicago').format(), '2015-05-01T12:00:00-05:00');
    });
    
    it('should exclude an object’s non-whitelisted keys', function () {
      var e = Event.transform({ EventId: '1', EventName: 'Fun Times', RssSlug: 'http://goo.gl' });
      assert.ok(!e.RssSlug);
    });
    
  });
  
});