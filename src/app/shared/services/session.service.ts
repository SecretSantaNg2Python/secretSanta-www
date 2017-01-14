import { Injectable } from '@angular/core';

import { CommonService } from './common.service';
import { SESSION_ACTIONS } from '../reducers/session.reducer';

@Injectable()
export class SessionService {

  constructor(private commonService: CommonService) { }

  registerUser(payload){
    let postParams = {
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
