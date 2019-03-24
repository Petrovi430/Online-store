import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../../../shared/models/category.model";

@Component({
  selector: 'petrovi4-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() categories: Category[];
  @Output() selectedCategory = new EventEmitter<{name: string}>();
  constructor() { }

  ngOnInit() {
    console.log(this.categories);
  }

  getCategory(event){
    let value = event.target.outerText;
    console.log(value);
    this.selectedCategory.emit({name: value});
  }

}
