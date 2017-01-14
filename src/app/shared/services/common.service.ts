import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'

import { API_ENDPOINT } from '../api';
import { ERROR_ACTIONS } from '../reducers/error.reducer';
import { DeleteParams, GetParams, PostParams, PutParams } from '../models/httpParams.interface';

@Injectable()
export class CommonService {
  // When you're looking to use this, start with the post method first.  The parameters for the rest of the methods are similar

  // A service should be created for each api endpoint, and should have a reducer, effects, and model

  constructor(private http: Http) { }

  delete(deleteParams: DeleteParams){
    let apiUrl = `${API_ENDPOINT}/${deleteParams.uri}`;
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': `token ${localStorage['Authorization']}`});
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(apiUrl, options)
      .map(res => ({
        type: deleteParams.successActionType,
        payload: res.json()
      }))
      .catch(res => Observable.of({
        type: ERROR_ACTIONS.REPORT_ERROR,
        payload: {
          action_type: deleteParams.errorActionType,
          message: res.json().error
        }
      }));
  }

  get(getParams: GetParams){

    let apiUrl = `${API_ENDPOINT}/${getParams.url}`;
    let headers = getParams.auth ? new Headers({'Authorization': `token ${localStorage['Authorization']}`}) : new Headers({});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(apiUrl, options)
      .map(res => ({
        type: getParams.successActionType,
        payload: res.json().categories
      }))
      .catch(res => Observable.of({
        type: ERROR_ACTIONS.REPORT_ERROR,
        payload: {
          action_type: getParams.errorActionType,
          message: res.json()
        }
      }))
  }

  post(postParams: PostParams){
    let apiUrl = `${API_ENDPOINT}/${postParams.uri}`;
    let headers = postParams.auth ? 
      new Headers({'Content-Type': 'application/json', 'Authorization': `token ${localStorage['Authorization']}`})
      :
      new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(apiUrl, postParams.payload, options)
      .map(res => ({
        type: postParams.succesActionType,
        payload: res.json()[postParams.responseObject]
      }))
      .catch(res => Observable.of({
        type: ERROR_ACTIONS.REPORT_ERROR,
        payload: {
          action_type: postParams.errorActionType,
          message: res.json().error
        }
      }));
  }

  put(putParams: PutParams){
    let apiUrl = `${API_ENDPOINT}/${putParams.url}`;
    let headers = new Headers({'Authorization': `token ${localStorage['Authorization']}`});
    let options = new RequestOptions({ headers: headers });

    return this.http.put(apiUrl, putParams.payload, options);
  }

}
