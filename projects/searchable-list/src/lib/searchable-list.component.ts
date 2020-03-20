import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-searchable-list',
  templateUrl: './searchable-list.component.html',
  styleUrls: ['./searchable-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class SearchableListComponent implements OnInit {
  @Input() type: string;
  @Input() dense: string;
  @Input() listType: string;
  @Input() data: any[];
  @Input() hoverable: boolean;
  @Input() height: string;
  singleList = [];
  multiList = [];
  filteredList = [];
  filterKeyword = '';

  constructor() {
  }

  ngOnInit(): void {
    this._checkInputs();
  }

  private _checkInputs() {
    this.type = this.type ? this.type : 'normal';
    this.dense = this.dense ? this.dense : '';
    this.listType = this.listType ? this.listType : 'single';
    this.data = this.data ? this.data : [];
    this.hoverable = this.hoverable ? this.hoverable : false;
    this.height = this.height ? this.height : '100%';
    if (this.listType === 'multi') {
      this.multiList = this.data;
    } else {
      this.singleList = this.data;
    }
    this.filteredList = this.data;
  }


  filterList() {
    if (this.listType === 'multi') {
      this.filterMultiList();
    } else {
      this.filterSingleList();
    }
  }

  filterSingleList() {
    if (this.filterKeyword) {
      this.filteredList = this.singleList.filter(
        elem => elem.toLowerCase().indexOf(this.filterKeyword.toLowerCase()) !== -1
      );
    } else {
      this.filteredList = this.singleList;
    }
  }

  filterMultiList() {
    if (this.filterKeyword) {
      this.filteredList = this.multiList.filter(
        elem => elem.name.toLowerCase().indexOf(this.filterKeyword.toLowerCase()) !== -1
      );
    } else {
      this.filteredList = this.multiList;
    }
  }
}
