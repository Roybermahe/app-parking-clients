import { Injectable } from "@angular/core";

import {
  TnsOAuthClient,
  ITnsOAuthTokenResult
} from "nativescript-oauth2";

@Injectable({
    providedIn: "root"
})
export class AuthService {
  private client: TnsOAuthClient = null;

  constructor() { }

  public tnsOauthLogin(providerType): Promise<ITnsOAuthTokenResult> {
    this.client = new TnsOAuthClient(providerType);
    return new Promise<ITnsOAuthTokenResult>((resolve, reject) => {
      this.client.loginWithCompletion(
        (tokenResult: ITnsOAuthTokenResult, error) => {
          if (error) {
            reject(error);
          } else {
            resolve(tokenResult);
          }
        }
      );
    });
  }

  public tnsOauthLogout(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (this.client) {
        this.client.logoutWithCompletion(
          (error) => {
            if (error) {
              reject(error);
            } else {
              resolve(true);
            }
          }
        );
      }
      else {
        resolve(true);
      }
    });
  }
}