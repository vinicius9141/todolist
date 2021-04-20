import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { list }  from '../Models/list.class';
import { Observable } from 'rxjs';


@Injectable()
export class ListService {

  constructor (private http: HttpClient ) { }

}