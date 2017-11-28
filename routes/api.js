var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    status: 'testing',
    time: Date.now(),
    groups: [
      {
        id: 'room_1',
        title: 'Room 1'
      }
    ],
    tumblers: [
      {
        id: 101,
        type: 'light',
        status: 'working',
        enabled: true,
        title: 'light 1',
        group: 'room_1'
      }
    ],
    sensors: [
      {
        id: 201,
        status: 'working',
        value: Math.random()*10,
        title: 'noise',
        group: 'room_1'
      }
    ]
  });
});

module.exports = router;
