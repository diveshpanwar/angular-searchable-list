import { Component } from '@angular/core';
import { countryList, countryListWithCode } from '../../../searchable-list-test/src/app/data/list.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = countryListWithCode;
  title = 'searchable-list-test';
}
