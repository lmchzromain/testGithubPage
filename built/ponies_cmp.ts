import {Component} from 'angular2/core';

@Component({
  selector: 'ponies-cmp',
  template: `
  <h3>Composant : add pony</h3>
  <input type="text" #ponyName (keydown.enter)="newPony(ponyName)">
  <button (click)="newPony(ponyName)">Add Pony (ou clique sur enter)</button>
  <ul>
    <li *ngFor="#pony of ponies; #isEven=even" [style.color]="isEven ? 'blue' : 'black'">
    {{pony.name}}
    </li>
  </ul>
  `
})
export class PoniesCmp {
  ponies: Array<any> = [{name: 'I\'m the pony 1'}, {name: 'I\'m the pony 2'}];

  newPony(name) {
    if(name.value){
      this.ponies.push({name: name.value});
    }else{
      alert('valeur vide idiomas');
    }
    name.value = null;
  }
}
