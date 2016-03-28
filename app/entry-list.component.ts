import { Component, EventEmitter } from 'angular2/core';
import { DisplayEntryComponent } from './display-entry.component';
import { Entry } from './entry.model';
import { EditEntryDetailsComponent } from './edit-entry-details.component';
import { NewEntryComponent } from './new-entry.component';
// import { DonePipe } from './done.pipe';

@Component({
  selector: 'entry-list',
  inputs: ['entryList'],
  outputs: ['onEntrySelect'],
  // pipes: [DonePipe],
  directives: [DisplayEntryComponent, EditEntryDetailsComponent, NewEntryComponent],
  template: `
  <display-entry *ngFor="#currentEntry of entryList"
    (click)="entryClicked(currentEntry)"
    [class.selected]="currentEntry === selectedEntry"
    [entry]="currentEntry">
  </display-entry>
  <edit-entry-details *ngIf="selectedEntry" [entry]="selectedEntry" (click)="editEntry($event)">
  </edit-entry-details><br>
  <new-entry (onSubmitNewEntry)="createEntry($event)">
  </new-entry>
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
