import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { CoursesComponent } from './courses/courses.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { HomeComponent } from './home/home.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';

const routes: Routes = [
  {path:'', redirectTo:'', pathMatch:'full', component:HomeComponent},
  {path:'student', component:StudentComponent,
    children:[
      {path:'addstudent', component:AddstudentComponent},
      {path:'viewstudent', component:ViewstudentComponent},
      {path:'edit/:id', component:EditstudentComponent}
    ]
  },
  {path:'courses', component:CoursesComponent},
  {path:'login', component:LogincomponentComponent},
  {path:'loginsuccess', component:LoginsuccessComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
