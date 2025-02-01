import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

  getAllStudents()
  {
    return this.http.get("http://localhost:3000/students");
  }

  postStudent(s:any)
  {
    return this.http.post("http://localhost:3000/students",s);
  }

  deleteStudent(sid:number)
  {
    return this.http.delete("http://localhost:3000/students/"+sid);
  }

  getStudnetById(sid:number)
  {
    return this.http.get("http://localhost:3000/students/"+sid);
  }
  
  putStudent(st:any)
  {
    return this.http.put("http://localhost:3000/students/"+st.id, st);
  }

}
