import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent {

  constructor (private studentService : StudentService, 
    private router:Router) { }
  
  students : any;

  ngOnInit(): void {
   
    this.studentService.getAllStudents().subscribe((s:any) => {

      this.students = s;

      console.log(this.students);
    });
  }

  removeStudent(id:number)
  {
    //alert("Student id : "+id);
    
    if(confirm("Do you want delete record?"))
    {
      this.studentService.deleteStudent(id).subscribe();
      window.location.reload();
    }
  }
  
  editStudent(id:any)
  {
   // alert(id);
    localStorage.setItem("stid",id);
    this.router.navigateByUrl("student/edit/"+id);
  }

}
