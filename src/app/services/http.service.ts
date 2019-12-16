import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private httpService: HttpClient) {
  }

  getVisitors() {
    return this.httpService.get('http://localhost/panel/get-visitors');
  }

  getTournaments() {
    return this.httpService.get('http://localhost/panel/all-tournaments');
  }

  getProducts() {
    return this.httpService.get('http://localhost/panel/all-products');
  }

}
