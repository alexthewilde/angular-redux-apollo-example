import { Component } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent {
  // Shorthand for
  // constructor(ngRedux: NgRedux { this.elephants$ = ngRedux.select('elephants'); })
  @select() cities$;

  // Since we're observing an array of items, we need to set up a 'trackBy'
  // parameter so Angular doesn't tear down and rebuild the list's DOM every
  // time there's an update.
  getItemName(index, item) {
    return item.name;
  }
}
