import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  constructor(private http: HttpClient) { }

  listarContas(): Observable<any> {
   return this.http.get('http://localhost:5001/ContasApagar/getall');
  }
}
