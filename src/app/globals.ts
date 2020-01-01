import {Component, Injectable} from '@angular/core';

@Injectable()
export class Globals {
  public auth = true;
  public session: any = null;
  public openMobile = false;
}
