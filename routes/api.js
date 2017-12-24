var express = require('express');
var router = express.Router();
var requestProxy = require('express-request-proxy');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    status: 'testing',
    time: Date.now(),
    groups: [
      {
        id: 'room_1',
        title: 'Room 1'
      },
      {
        id: 'room_2',
        title: 'Room 2'
      },
      {
        id: 'room_3',
        title: 'Outside'
      },
      {
        id: 'room_4',
        title: 'Room 4'
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
router.use("/test", requestProxy({
    url: "http://e621.net/post/index.json?limit=10",
    timeout: 20000,  // in milliseconds, two seconds
}));
router.use("/data/*", requestProxy({
    url: "https://static1.e621.net/data/*",
    timeout: 1000,  // in milliseconds, two seconds
}));

module.exports = router;
