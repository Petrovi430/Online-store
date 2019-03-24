import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PhoneComponent} from "./phone.component";
import { PhoneSidebarComponent } from './phone-sidebar/phone-sidebar.component';
import { PhoneDescriptionComponent } from './phone-description/phone-description.component';

@NgModule({
  declarations: [PhoneComponent, PhoneSidebarComponent, PhoneDescriptionComponent],
  imports: [CommonModule]
})

export class PhoneModule {}
