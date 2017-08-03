import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class CitiesActions {
  static LOAD_SUCCEEDED = 'LOAD_SUCCEEDED(CITIES)';
  static LOAD_FAILED = 'LOAD_FAILED(CITIES)';

  loadSucceeded(payload) {
    return {
      type: CitiesActions.LOAD_SUCCEEDED,
      payload,
    };
  }

  loadFailed(error) {
    return {
      type: CitiesActions.LOAD_FAILED,
      error,
    };
  }
}
