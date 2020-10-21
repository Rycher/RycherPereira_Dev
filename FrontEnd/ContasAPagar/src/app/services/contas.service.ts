import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContasService {

  constructor(private http: HttpClient ) { }

    public getContas(): Observable<any>
    {
      return this.http.get('https://localhost:5001/getall');
    }    
  
}
