import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {BasketComponent} from "./basket/basket.component";
import {PhoneComponent} from "./phone/phone.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'phone', component: PhoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
