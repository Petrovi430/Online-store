import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BasketComponent} from "./basket.component";
import { BasketContentComponent } from './basket-content/basket-content.component';
import { BasketSidebarComponent } from './basket-sidebar/basket-sidebar.component';

@NgModule({
  declarations: [BasketComponent, BasketContentComponent, BasketSidebarComponent],
  imports: [CommonModule]
})

export class BasketModule {}
