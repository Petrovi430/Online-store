import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MainComponent} from "./main.component";
import {PhonesListComponent} from "./phones-list/phones-list.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SearchComponent} from "./sidebar/search/search.component";
import {BasketCartComponent} from "./sidebar/basket-cart/basket-cart.component";
import {CategoriesComponent} from "./sidebar/categories/categories.component";

@NgModule({
  declarations: [
    MainComponent,
    PhonesListComponent,
    SidebarComponent,
    SearchComponent,
    BasketCartComponent,
    CategoriesComponent
  ],
  imports: [CommonModule]
})

export class MainModule {}
