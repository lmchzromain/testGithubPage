"use strict";
var browser_1 = require('angular2/platform/browser');
var ponyracer_app_1 = require('./ponyracer_app');
var http_1 = require('angular2/http');
var race_service_1 = require('./services/race_service');
browser_1.bootstrap(ponyracer_app_1.PonyRacerApp, [http_1.HTTP_PROVIDERS, race_service_1.RaceService])
    .catch(function (err) { return console.log(err); }); // useful to catch the errors
//# sourceMappingURL=bootstrap.js.map