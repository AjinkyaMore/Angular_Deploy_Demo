import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {

  constructor (private studentService : StudentService, public fb:FormBuilder ) { }
  
  studentForm !: FormGroup;

  students : any;

  ngOnInit(): void {
   
    this.studentForm=this.fb.group({
      id:[],
      name:[],
      contact:[],
      marks:[],
      username:[],
      password:[]
    })

  }

  registerStudent()
  {
    //console.log(this.studentForm.value); 
    this.studentService.postStudent(this.studentForm.value).subscribe();
    alert("Register Success ......")
    this.studentForm.reset();
  }
}
