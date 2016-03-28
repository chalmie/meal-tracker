import { Component, EventEmitter } from 'angular2/core';
import { EntryListComponent } from './entry-list.component';
import { Entry } from './entry.model';

@Component({
  selector: 'my-app',
  directives: [EntryListComponent],
  template: `
    <div class="container">
      <h1>To-Do List</h1>
      <entry-list
        [entryList]="entries"
        (onEntrySelect)="entryWasSelected($event)">
      </entry-list>
    </div>
  `
})

export class AppComponent {
  public entries: Entry[];
  constructor(){
    this.entries = [
      new Entry("Pizza", 'Meat Lovers', 1200, 0),
      new Entry("Sour Patch Kids.", 'Only the red and blue ones', 600, 1),
      new Entry("PBR", '12-pack', 1200, 2),
      new Entry("Cupcakes", 'Six of em', 600, 3)
    ];
  }
}
