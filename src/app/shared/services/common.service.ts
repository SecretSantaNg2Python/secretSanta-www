import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'

import { API_ENDPOINT } from '../api';

@Injectable()
export class CommonService {
  // When you're looking to use this, start with the post method first.  The parameters for the rest of the methods are similar

  // A service should be created for each api endpoint, and should have a reducer, effects, and model
  
  //todo: remove the quotes around each 'RROR_ACTIONS.REPORT_ERROR' after the error action reducer has been created. 

  constructor(private http: Http) { }

  delete(
    uri: string, 
    successActionType: string,
    errorActionType: string
    ){
    let apiUrl = `${API_ENDPOINT}/${uri}`;
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': `token ${localStorage['Authorization']}`});
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(apiUrl, options)
      .map(res => ({
        type: successActionType,
        payload: res.json()
      }))
      .catch(res => Observable.of({
        type: 'ERROR_ACTIONS.REPORT_ERROR',
        payload: {
          action_type: errorActionType,
          message: res.json().error
        }
      }));
  }

  get(
    url: string,
    auth: boolean,
    successActionType: string,
    errorActionType: string
    ){

    let apiUrl = `${API_ENDPOINT}/${url}`;
    let headers = auth ? new Headers({'Authorization': `token ${localStorage['Authorization']}`}) : new Headers({});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(apiUrl, options)
      .map(res => ({
        type: successActionType,
        payload: res.json().categories
      }))
      .catch(res => Observable.of({
        type: 'ERROR_ACTIONS.REPORT_ERROR',
        payload: {
          action_type: errorActionType,
          message: res.json()
        }
      }))
  }

  post(
    uri: string, 
    payload: {}, 
    auth: boolean,
    succesActionType: string,
    responseObject: string,
    errorActionType: string,
    ){

    /*
    uri: the api endpoint
    payload: what you're sending on the http request, should be data from a form
    auth: indicates if the token should be added in the headers
    successActionType: If the http responce is a success, send this action type to the reducer, should be something like `ACTION_TYPES.ACTION_TYPE.SUCCESS`
    /responseObject: this should be a property on the success resposonse body object
    errorActionType: the failure action, should look something like `ACTION_TYPES.ACTION_TYPE.FAILURE`

    example of using this method:
    this.commonService.post(
      'users', 
      payload, 
      false, 
      USER_ACTIONS.POST_USER.SUCCESS, 
      'user',
      USER_ACTIONS>POST_USER.FAILURE)
    */

    let apiUrl = `${API_ENDPOINT}/${uri}`;
    let headers = auth ? 
      new Headers({'Content-Type': 'application/json', 'Authorization': `token ${localStorage['Authorization']}`})
      :
      new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(apiUrl, payload, options)
      .map(res => ({
        type: succesActionType,
        payload: res.json()[responseObject]
      }))
      .catch(res => Observable.of({
        type: 'ERROR_ACTIONS.REPORT_ERROR',
        payload: {
          action_type: errorActionType,
          message: res.json().error
        }
      }));
  }

  put(url: string, payload){
    let apiUrl = `${API_ENDPOINT}/${url}`;
    let headers = new Headers({'Authorization': `token ${localStorage['Authorization']}`});
    let options = new RequestOptions({ headers: headers });

    return this.http.put(apiUrl, payload, options);
  }

}
