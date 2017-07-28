import { CitiesListComponent } from './cities-list/cities-list.component';
import { CitiesService } from './cities.service';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { CitiesEpics } from './cities.epics';
import { CitiesActions } from './cities.actions';


@NgModule({
  declarations: [
    CitiesListComponent
   ],
  providers: [
    CitiesEpics,
    CitiesActions,
    CitiesService
  ],
  imports: [ CommonModule ],
  exports: [ CitiesListComponent ],
})
export class CitiesModule {}
