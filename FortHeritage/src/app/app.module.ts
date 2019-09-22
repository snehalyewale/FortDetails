import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MatToolbarModule, MatCardModule, MatInputModule, MatSelectModule, MatProgressBarModule, MatAutocompleteModule, MatIconModule, MatButtonModule } from '@angular/material';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from "./service/app.service";
import { HttpClientModule } from "@angular/common/http";
import { FortDetailsComponent } from './fort-details/fort-details.component';
import { RoutesRoutingModule } from "./routes/routes-routing.module";
import { HomeComponent } from './home/home.component';
import { SliderModule } from 'angular-image-slider';
import { FortListComponent } from './fort-list/fort-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FortDetailsComponent,
    HomeComponent,
    FortListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatButtonModule,
    ReactiveFormsModule, 
    SliderModule,
    RoutesRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
