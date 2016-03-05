"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var races_cmp_1 = require('./races_cmp');
var ponies_cmp_1 = require('./ponies_cmp');
var race_service_1 = require('./services/race_service');
var PonyRacerApp = (function () {
    function PonyRacerApp(_raceService) {
        this._raceService = _raceService;
        this.user = { name: "Romain" };
        this.races = [];
    }
    PonyRacerApp.prototype.refreshRaces = function () {
        this.races = [{ name: 'Lille' }, { name: 'Lyon' }, { name: 'Paris' }, { name: 'Toulouse' }, { name: 'Nantes' }];
    };
    PonyRacerApp.prototype.onNewRace = function () {
    };
    PonyRacerApp.prototype.onButtonClick = function (event) {
        console.log(event);
    };
    PonyRacerApp.prototype.whatIsWrite = function (test) {
        alert(test);
    };
    PonyRacerApp.prototype.isAnAwesomeDiv = function () {
        return true;
    };
    PonyRacerApp.prototype.list = function () {
        this._raceService.list();
    };
    PonyRacerApp = __decorate([
        core_1.Component({
            selector: 'ponyracer-app',
            template: "\n  <h1>PonyRacer</h1>\n  <p [textContent]=\"'Salut '+user.name\"></p>\n  <button (click)=\"refreshRaces()\">Change moi le nombre de courses bitch</button><br>\n\n  <div [ngSwitch]=\"races.length\">\n  <p *ngSwitchWhen=\"0\">Pas de course actuellement</p>\n  <p *ngSwitchWhen=\"1\">Il y a une course actuellement</p>\n  <p *ngSwitchDefault>Il y a {{races.length}} courses actuellement</p>\n  </div>\n  <div *ngIf=\"races.length > 0\">\n  <h2>Races</h2>\n  <ul>\n  <li *ngFor=\"#race of races; #i=index\">{{i+1}} - {{race.name}}</li>\n  </ul>\n  </div>\n\n  <br>\n\n  <races-cmp (newRaceAvailable)=\"onNewRace()\"></races-cmp>\n\n  <br>\n\n  <div (click)=\"onButtonClick($event)\">\n  <button>Look la console!</button>\n  </div>\n\n  <br>\n\n  <input type=\"text\" #name>\n  <button (click)=\"name.focus()\">Focus the input</button>\n  <button (click)=\"whatIsWrite(name.value)\">C'est \u00E9crit quoi dans ce champ ?</button>\n\n  <p [class.awesome-class]=\"isAnAwesomeDiv()\">I'm Awesome ! <= Look my class</p>\n\n  <ponies-cmp></ponies-cmp>\n\n  <button (click)=\"list()\">Utilise un services (ouais \u00E0 retravailler)</button>\n  ",
            // declare all the components you use in your template
            directives: [races_cmp_1.RacesCmp, ponies_cmp_1.PoniesCmp]
        }), 
        __metadata('design:paramtypes', [race_service_1.RaceService])
    ], PonyRacerApp);
    return PonyRacerApp;
}());
exports.PonyRacerApp = PonyRacerApp;
//# sourceMappingURL=ponyracer_app.js.map