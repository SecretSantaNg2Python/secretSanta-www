import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'

import { API_ENDPOINT } from '../api';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  delete(url: string){
    let apiUrl = `${API_ENDPOINT}/${url}`;
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': `token ${localStorage['Authorization']}`});
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(apiUrl, options);
  }

  get(url: string, auth: boolean){
    let apiUrl = `${API_ENDPOINT}/${url}`;
    let headers = auth ? new Headers({'Authorization': `token ${localStorage['Authorization']}`}) : new Headers({});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(apiUrl, options);
  }

  post(url: string, payload: {}, auth: boolean){
    let apiUrl = `${API_ENDPOINT}/${url}`;
    let headers = auth ? 
      new Headers({'Content-Type': 'application/json', 'Authorization': `token ${localStorage['Authorization']}`})
      :
      new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(apiUrl, payload, options);
  }

  put(url: string, payload){
    let apiUrl = `${API_ENDPOINT}/${url}`;
    let headers = new Headers({'Authorization': `token ${localStorage['Authorization']}`});
    let options = new RequestOptions({ headers: headers });

    return this.http.put(apiUrl, payload, options);
  }

}
