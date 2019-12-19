import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  URL = 'http://localhost';

  constructor(private httpService: HttpClient) {
  }

  getUsers() {
    return this.httpService.get(this.URL + '/panel/get-users');
  }

  getVisitors() {
    return this.httpService.get(this.URL + '/panel/get-visitors');
  }

  getTournaments() {
    return this.httpService.get(this.URL + '/panel/all-tournaments');
  }

  getProducts() {
    return this.httpService.get(this.URL + '/panel/all-products');
  }

}
