import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';

import { ApolloModule } from 'angular2-apollo';

import { AppComponent } from './app.component';
import { AppActions } from './app.actions';

import { ElephantsModule } from './elephants/elephants.module';
import { LionsModule } from './lions/lions.module';

import { provideClient } from './apollo-client-store';
import { CitiesModule } from './cities/cities.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    ElephantsModule,
    LionsModule,
    CitiesModule,
    ApolloModule.withClient(provideClient),
  ],
  providers: [ AppActions ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
