import { Component, EventEmitter } from 'angular2/core';
import { DisplayEntryNameComponent } from './display-entry-name.component';
import { DisplayEntryDetailsComponent } from './display-entry-details.component';
import { Entry } from './entry.model';
import { EditEntryDetailsComponent } from './edit-entry-details.component';
import { NewEntryComponent } from './new-entry.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'entry-list',
  inputs: ['entryList'],
  outputs: ['onEntrySelect'],
  pipes: [CaloriePipe],
  directives: [DisplayEntryNameComponent, DisplayEntryDetailsComponent, EditEntryDetailsComponent, NewEntryComponent],
  template: `
  <div class="sort">
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="none">Show All</option>
      <option value="healthy">Healthy</option>
      <option value="unhealthy">Unhealthy</option>
    </select>
  </div>
  <div class="row">
    <display-entry-details *ngIf="selectedEntry" [entry]="selectedEntry">
    </display-entry-details>
    <display-entry-name *ngFor="#currentEntry of entryList | calorie:calorieFilter"
      (click)="entryClicked(currentEntry)"
      [class.selected]="currentEntry === selectedEntry"
      [entry]="currentEntry">
    </display-entry-name>
  </div>
  <div class="row">
    <edit-entry-details *ngIf="selectedEntry" [entry]="selectedEntry" (click)="editEntry($event)">
    </edit-entry-details><br>
    <new-entry (onSubmitNewEntry)="createEntry($event)">
    </new-entry>
  </div>
  `
})

export class EntryListComponent {
  public entryList: Entry[];
  public onEntrySelect: EventEmitter<Entry>;
  public selectedEntry: Entry;
  public calorieFilter: string = "none";
  constructor() {
    this.onEntrySelect = new EventEmitter();
  }
  entryClicked(clickedEntry: Entry): void {
    this.selectedEntry = clickedEntry;
    this.onEntrySelect.emit(clickedEntry);
  }
  createEntry(newEntry: Entry): void {
    this.entryList.push(
      new Entry(newEntry.name, newEntry.details, newEntry.calories, this.entryList.length)
    );
  }
  onChange(filterOption) {
    this.calorieFilter = filterOption;
  }
}
