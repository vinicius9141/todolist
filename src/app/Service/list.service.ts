import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task }  from '../Models/list';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor (private http: HttpClient ) { }
  protected UrlServiceV1: string = "http://localhost:3000/"

  getTasks() : Observable<Task[]> {
      return this.http.get<Task[]>(this.UrlServiceV1 + "gettasks");
  }


  public insertTask(task: Task): Observable<any>{
    return this.http.post<any>(this.UrlServiceV1+ "inserttaks", task);
    
  }

  public deleteTask(){
    return this.http.delete(this.UrlServiceV1+ "deletetasks")
  }
}