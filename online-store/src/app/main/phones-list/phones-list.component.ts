import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Phone} from "../../shared/models/phone.model";

@Component({
  selector: 'petrovi4-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.scss']
})
export class PhonesListComponent implements OnInit {

  @Input() phones: Phone[];
  @Output() loadMore = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

  }


  loadMoreFunc(){
    console.log('click');
    this.loadMore.emit('click');

  }
}
