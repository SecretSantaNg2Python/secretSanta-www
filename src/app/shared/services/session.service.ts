import { Injectable } from '@angular/core';

import { CommonService } from './common.service';
import { SESSION_ACTIONS } from '../reducers/session.reducer';
import { GetParams, PostParams } from '../models/httpParams.interface';

@Injectable()
export class SessionService {

  constructor(private commonService: CommonService) {}

  getUser(payload){
    // need a get User endpoint that checks the token
    // let getParams: GetParams = {

    // }
  }

  loginUser(payload: {email: string, password: string}){
    let postParams: PostParams = {
      uri: 'user',
      payload: payload,
      auth: false,
      succesActionType: SESSION_ACTIONS.LOGIN_USER.SUCCESS,
      responseObject: 'account',
      errorActionType: SESSION_ACTIONS.LOGIN_USER.FAILURE
    }
    return this.commonService.post(postParams);
  }

  registerUser(payload: {username: string, email: string, password: string, verify_password: string}){
    let postParams: PostParams = {
      uri: 'users', 
      payload: payload, 
      auth: false, 
      succesActionType: SESSION_ACTIONS.REGISTER_USER.SUCCESS,
      responseObject: 'account',
      errorActionType: SESSION_ACTIONS.REGISTER_USER.FAILURE
    }
    return this.commonService.post(postParams)
  }

}
