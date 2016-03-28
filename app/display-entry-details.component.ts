import { Component } from 'angular2/core';
import { Entry } from './entry.model';

@Component({
    selector: 'display-entry-details',
    inputs: ['entry'],
    template: `
    <div class="details col-sm-12">
      <label>Details: {{ entry.details }} </label>
      <label>Calories: {{ entry.calories }} </label>
    </div>
    `
})

export class DisplayEntryDetailsComponent {
  public entry: Entry;
}
