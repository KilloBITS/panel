import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {
  // URL = 'http://chicken-dinner.club';
  URL = 'http://localhost';

  constructor(private httpService: HttpClient) {
  }

  getUsers() {
    return this.httpService.get(this.URL + '/panel/get-users');
  }

  getVisitors() {
    return this.httpService.get(this.URL + '/panel/get-visitors');
  }

  getProducts() {
    return this.httpService.get(this.URL + '/panel/all-products');
  }

  /** tournaments **/
  getTournaments() {
    return this.httpService.get(this.URL + '/panel/all-tournaments');
  }

  getStartTour(ai) {
    return this.httpService.get(this.URL + '/panel/tournament?type=start&ai=' + ai);
  }

  getLiveTour(ai) {
    return this.httpService.get(this.URL + '/panel/tournament?type=live&ai=' + ai);
  }

  getActiveTour(ai) {
    return this.httpService.get(this.URL + '/panel/tournament?type=active&ai=' + ai);
  }

  getEditTour(ai) {
    return this.httpService.get(this.URL + '/panel/tournament?type=edit&ai=' + ai);
  }

  getEndTour(ai) {
    return this.httpService.get(this.URL + '/panel/tournament?type=end&ai=' + ai);
  }

  getRemoveTour(ai) {
    return this.httpService.get(this.URL + '/panel/tournament?type=remove&ai=' + ai);
  }
}
