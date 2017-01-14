import { Injectable } from '@angular/core';

import { CommonService } from './common.service';
import { SESSION_ACTIONS } from '../reducers/session.reducer';

@Injectable()
export class SessionService {

  constructor(private commonService: CommonService) { }

  registerUser(payload){
    return this.commonService.post(
      'users', 
      payload, 
      false, 
      SESSION_ACTIONS.REGISTER_USER.SUCCESS,
      'account',
      'ERROR.SESSION_ACTIONS')
  }

}
