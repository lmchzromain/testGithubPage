import {bootstrap} from 'angular2/platform/browser';
import {PonyRacerApp} from './ponyracer_app';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RaceService} from './services/race_service';

bootstrap(PonyRacerApp, [HTTP_PROVIDERS, RaceService])
 .catch(err => console.log(err)); // useful to catch the errors
