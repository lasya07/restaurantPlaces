import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlacesComponent} from './places/places.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
   {path:'place',component: PlacesComponent},
   {path:'param/:id',component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
