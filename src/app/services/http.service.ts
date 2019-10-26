import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private httpService: HttpClient){ }

  getTournaments(){
    return this.httpService.get('http://localhost/panel/all-tournaments');
  }

}
