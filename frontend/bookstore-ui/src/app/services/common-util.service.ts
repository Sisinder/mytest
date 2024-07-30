import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class CommonUtilService {

endpoint= environment.API_ENDPOINT;

  constructor(public http: HttpClient) { }

  public get(url:string) {
    return this.http.get(this.endpoint +url).toPromise().then(res => res);
  }

  public post(url:string,body:any) {
    return this.http.post(this.endpoint +url,body).toPromise().then(res => res);
  }
}
