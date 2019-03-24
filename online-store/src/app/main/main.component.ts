import { Component, OnInit } from '@angular/core';
import {Phone} from "../shared/models/phone.model";
import {PhonesService} from "../shared/services/phones.service";

@Component({
  selector: 'petrovi4-main',
  templateUrl: './main.component.html',
  styleUrls: [
    '../shared/common.scss',
    './main.component.scss'
  ]
})
export class MainComponent implements OnInit {

  phones: Phone[] = [];
  constructor(private phonesService: PhonesService) { }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.phonesService.getPhones()
      .subscribe((phones: Phone[]) => {
        this.phones = this.phones.concat(phones);
        console.log(this.phones);
      });
  }

  loadMore(data: string){
    console.log(data);
    this.getData();
  }

}
