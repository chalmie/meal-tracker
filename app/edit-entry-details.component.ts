import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';

@Component({
  selector: 'edit-entry-details',
  inputs: ['entry'],
  template: `
  <div class="entry-form col-sm-6">
    <h3>Edit Description: </h3>
    <input value="{{ entry.name }}" class="col-sm-4 input-lg entry-form" #newName/>
    <input value="{{ entry.details }}" class="col-sm-4 input-lg entry-form" #newDetails/>
    <input value="{{ entry.calories }}" class="col-sm-4 input-lg entry-form" #newCalories/>
   <button (click)="editEntry(newName, newDetails, newCalories)" class="btn-success btn-lg add-button">Edit</button>
 </div>
  `
})
export class EditEntryDetailsComponent {
  public entry: Entry;
  public onSubmitEditEntry: EventEmitter<Entry>;
  constructor(){
    this.onSubmitEditEntry = new EventEmitter();
  }
  editEntry(newName: HTMLInputElement, newDetails: HTMLSelectElement, newCalories: HTMLSelectElement) {
    this.entry.name = newName.value;
    this.entry.details = newDetails.value;
    this.entry.calories = parseInt(newCalories.value);
    this.entry.healthy = this.entry.calories <= 300;
  }
}
