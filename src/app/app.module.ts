import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddstudentComponent,
    ViewstudentComponent,
    CoursesComponent,
    HeaderComponent,
    PagenotfoundComponent,
    HomeComponent,
    EditstudentComponent,
    LogincomponentComponent,
    LoginsuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
