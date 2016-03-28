import {Component, EventEmitter} from 'angular2/core';
import {Entry} from './entry.model';

@Component({
  selector: 'new-entry',
  outputs: ['onSubmitNewEntry'],
  template: `
  <div class="entry-form">
    <h3>Create Entry:</h3>
    <input placeholder="Name" class="col-sm-4 input-lg" #newName>
    <input placeholder="Details" class="col-sm-4 input-lg" #newDetails>
    <input placeholder="Calories" class="col-sm-4 input-lg" #newCalories>
    <button (click)="addEntry(newName, newDetails, newCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewEntryComponent {
  public onSubmitNewEntry: EventEmitter<Entry>;
  constructor(){
    this.onSubmitNewEntry = new EventEmitter();
  }
  addEntry(newName: HTMLInputElement, newDetails: HTMLSelectElement, newCalories: HTMLInputElement){
    var newEntry: Entry = new Entry(newName.value, newDetails.value, parseInt(newCalories.value), -1);
    this.onSubmitNewEntry.emit(newEntry);
    newName.value = '';
    newDetails.value = '';
    newCalories.value = '';
  }
}
