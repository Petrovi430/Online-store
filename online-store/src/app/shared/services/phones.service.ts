
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {BaseApi} from "../core/base-api";
import {Phone} from "../models/phone.model";

@Injectable()

export class PhonesService extends BaseApi {
  constructor (public Http: HttpClient){
    super(Http);
  }

  getPhones(): Observable<Phone[]> {
    return this.get('phones');
  }
}
