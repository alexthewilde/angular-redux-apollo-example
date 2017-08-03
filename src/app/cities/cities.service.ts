import { Angular2Apollo } from 'angular2-apollo';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';


@Injectable()
export class CitiesService {
  constructor(private apollo: Angular2Apollo) {}

  getAll() {
    const query = gql`
      query CitiesQuery {
        allCities {
          name
          country
        }
      }
    `;
    return  this.apollo.watchQuery<any>({
      query: query
    }).map(({data}) => data.allCities);

  }
}
