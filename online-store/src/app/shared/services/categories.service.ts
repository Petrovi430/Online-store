import {BaseApi} from "../core/base-api";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Category} from "../models/category.model";

@Injectable()
export class CategoriesService extends BaseApi {
  constructor(public Http: HttpClient){
    super(Http);
  }

  getCategories(): Observable<Category[]> {
    return this.get('categories');
  }
}
