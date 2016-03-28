import { Component, EventEmitter } from 'angular2/core';
import { DisplayEntryNameComponent } from './display-entry-name.component';
import { DisplayEntryDetailsComponent } from './display-entry-details.component';
import { Entry } from './entry.model';
import { EditEntryDetailsComponent } from './edit-entry-details.component';
import { NewEntryComponent } from './new-entry.component';
// import { DonePipe } from './done.pipe';

@Component({
  selector: 'entry-list',
  inputs: ['entryList'],
  outputs: ['onEntrySelect'],
  // pipes: [DonePipe],
  directives: [DisplayEntryNameComponent, DisplayEntryDetailsComponent, EditEntryDetailsComponent, NewEntryComponent],
  template: `
  <div class="row">
    <display-entry-details *ngIf="selectedEntry" [entry]="selectedEntry">
    </display-entry-details>
    <display-entry-name *ngFor="#currentEntry of entryList"
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
  public filterDone: string = "notDone";
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
  // onChange(filterOption) {
  //   this.filterDone = filterOption;
  // }
}
