import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FortDetailsComponent } from "../fort-details/fort-details.component";
import { HomeComponent } from "../home/home.component";
import { FortListComponent } from "../fort-list/fort-list.component";

const routes: Routes = [
      { path: '', component: HomeComponent},
      { path: 'fort', component: FortListComponent},
      { path: 'fort/details', component: FortDetailsComponent},
      { path: 'fort/list', component: FortListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
