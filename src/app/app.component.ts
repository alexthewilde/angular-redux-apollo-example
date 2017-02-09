import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { Action, combineReducers, applyMiddleware, ReducersMapObject } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { client } from './apollo-client-store';

import { Angular2Apollo } from 'angular2-apollo';
import gql from 'graphql-tag';


import { AppActions } from './app.actions';
import { ElephantsEpics } from './elephants/elephants.epics';
import { elephantsReducer } from './elephants/elephants.reducer';

import { LionsEpics } from './lions/lions.epics';
import { lionsReducer } from './lions/lions.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities$: Observable<any>;

  constructor(
    private apollo: Angular2Apollo,
    private ngRedux: NgRedux<any>,
    private actions: AppActions,
    devTools: DevToolsExtension,
    elephantsEpics: ElephantsEpics,
    lionsEpics: LionsEpics
  ) {
    const rootReducer = combineReducers({
      elephants: elephantsReducer,
      lions: lionsReducer,
      apollo: client.reducer() as any,
    });

    let enhancers = [
      applyMiddleware(client.middleware()),
    ];

    if (devTools.isEnabled()) {
      enhancers.push(devTools.enhancer());
    }

    ngRedux.configureStore(
      rootReducer,
      {},
      [
        createEpicMiddleware(combineEpics(...elephantsEpics.epics)),
        createEpicMiddleware(combineEpics(...lionsEpics.epics)),
      ],
      // Enhancers
      enhancers
    );
  }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.ngRedux.dispatch(this.actions.loadData());
    this.loadCities();
  }

  loadCities() {
    const query = gql`
      query CitiesQuery {
        allCities {
          name
          country
        }
      }
    `;

    this.cities$ = this.apollo.watchQuery<any>({
      query: query
    }).map(({data}) => data.allCities);
  }
}
