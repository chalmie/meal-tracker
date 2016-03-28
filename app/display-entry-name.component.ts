import { Component } from 'angular2/core';
import { Entry } from './entry.model';

@Component({
    selector: 'display-entry-name',
    inputs: ['entry'],
    template: `
    <div class="food-names col-sm-12">
      <label>Name: {{entry.name}} </label>
    </div>
    `
})

export class DisplayEntryNameComponent {
  public entry: Entry;
}
