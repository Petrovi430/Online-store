import { Component, OnInit } from '@angular/core';
import {Category} from "../../shared/models/category.model";
import {CategoriesService} from "../../shared/services/categories.service";

@Component({
  selector: 'petrovi4-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  categories: Category[] = [];
  categoryName: {name: string}[] = [];
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }

  selectCategory(categoryName: {name: string}){
    this.categoryName.push(categoryName);
  }
}
