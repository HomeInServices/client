import { Injectable } from '@angular/core';

@Injectable()
export class LoginuserService {

  public _role: any;
  public _facebookId: any;
  private _sysId: any;

  constructor() { 
    console.log("loginuserService init");
  }

    get role():any {
        return this._role;
    }
    
    set role(role:any) {
        this._role = role;
    }

      get facebookId():any {
        return this._facebookId;
    }
    set facebookId(facebookId:any) {
        this._facebookId = facebookId;
    }

      get sysId():any {
        return this._sysId;
    }
    set sysId(sysId:any) {
        this._sysId = sysId;
    }

}
