import { IPayloadAction } from '../utils/payload-action';
import { CitiesActions } from './cities.actions';

export function citiesReducer(state = [], action: IPayloadAction) {
  switch (action.type) {
    case CitiesActions.LOAD_SUCCEEDED:
      return action.payload;
    case CitiesActions.LOAD_FAILED:
      return action.error;
  }

  return state;
}
