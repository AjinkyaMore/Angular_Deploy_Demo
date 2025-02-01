import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  
  constructor(private studentService:StudentService, private fb:FormBuilder,
    private router:Router) {  }

  studentForm !: FormGroup;

  singleStudent:any;

  ngOnInit() {
    
    this.studentForm=this.fb.group({
      id:[],
      name:[],
      contact:[],
      marks:[],
      username:[],
      password:[]
    })

    this.getEditStudent();
  }


  getEditStudent()
  {
    let sid :any = localStorage.getItem("stid");
    this.studentService.getStudnetById(sid).subscribe((st:any)=>{

      this.singleStudent = st;

      this.studentForm.patchValue({
        id:this.singleStudent.id,
        name:this.singleStudent.name,
        contact:this.singleStudent.contact,
        marks:this.singleStudent.marks,
        username:this.singleStudent.username,
        password:this.singleStudent.password
      })

      console.log(this.singleStudent);
    });
  }

  editStudent()
  {
    this.studentService.putStudent(this.studentForm.value).subscribe();
    alert("Record updated ...");
    this.router.navigateByUrl("student/viewstudent");
  }

}
