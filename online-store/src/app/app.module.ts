import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {BasketModule} from "./basket/basket.module";
import {MainModule} from "./main/main.module";
import {PhoneModule} from "./phone/phone.module";
import {PhonesService} from "./shared/services/phones.service";
import {CategoriesService} from "./shared/services/categories.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainModule,
    BasketModule,
    PhoneModule,
    AppRoutingModule
  ],
  providers: [PhonesService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
