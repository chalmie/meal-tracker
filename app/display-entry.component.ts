import { Component } from 'angular2/core';
import { Entry } from './entry.model';

@Component({
    selector: 'display-entry',
    inputs: ['entry'],
    template: `
    <div>
      <label>Name: {{entry.name}} </label>
    </div>
    `
})

export class DisplayEntryComponent {
  public entry: Entry;
}
