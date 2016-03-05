import {Component} from 'angular2/core';
import {RacesCmp} from './races_cmp';
import {PoniesCmp} from './ponies_cmp';
import {RaceService} from './services/race_service';

@Component({
  selector: 'ponyracer-app',
  template: `
  <h1>PonyRacer</h1>
  <p [textContent]="'Salut '+user.name"></p>
  <button (click)="refreshRaces()">Change moi le nombre de courses bitch</button><br>

  <div [ngSwitch]="races.length">
  <p *ngSwitchWhen="0">Pas de course actuellement</p>
  <p *ngSwitchWhen="1">Il y a une course actuellement</p>
  <p *ngSwitchDefault>Il y a {{races.length}} courses actuellement</p>
  </div>
  <div *ngIf="races.length > 0">
  <h2>Races</h2>
  <ul>
  <li *ngFor="#race of races; #i=index">{{i+1}} - {{race.name}}</li>
  </ul>
  </div>

  <br>

  <races-cmp (newRaceAvailable)="onNewRace()"></races-cmp>

  <br>

  <div (click)="onButtonClick($event)">
  <button>Look la console!</button>
  </div>

  <br>

  <input type="text" #name>
  <button (click)="name.focus()">Focus the input</button>
  <button (click)="whatIsWrite(name.value)">C'est écrit quoi dans ce champ ?</button>

  <p [class.awesome-class]="isAnAwesomeDiv()">I'm Awesome ! <= Look my class</p>

  <ponies-cmp></ponies-cmp>

  <button (click)="list()">Utilise un services (ouais à retravailler)</button>
  `,
  // declare all the components you use in your template
  directives: [RacesCmp, PoniesCmp]
})

export class PonyRacerApp {
  constructor(private _raceService: RaceService) {}

  user:any = {name : "Romain" };
  races: any = [];

  refreshRaces() {
    this.races = [{name: 'Lille'}, {name: 'Lyon'}, {name: 'Paris'}, {name: 'Toulouse'}, {name: 'Nantes'}];
  }
  onNewRace(){

  }
  onButtonClick(event){
    console.log(event);
  }
  whatIsWrite(test){
    alert(test);
  }
  isAnAwesomeDiv(){
    return true;
  }
  list() {
    this._raceService.list();
  }
}
