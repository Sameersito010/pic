import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/components/home/home.component';
import { CourseComponent } from './shared/components/course/course.component';
import { CoursecardComponent } from './shared/components/coursecard/coursecard.component';
import { CoursedialougeComponent } from './shared/components/coursedialouge/coursedialouge.component';
import { CourseformComponent } from './shared/components/courseform/courseform.component';
import { MaterialModule } from './shared/material/material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    CoursecardComponent,
    CoursedialougeComponent,
    CourseformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
