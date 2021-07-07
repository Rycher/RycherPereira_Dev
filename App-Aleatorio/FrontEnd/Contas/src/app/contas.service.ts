import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conta } from './contas-apagar/Conta';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  constructor(private http: HttpClient) { }

  listarContas(): Observable<any> {
   return this.http.get('https://localhost:5001/ContasApagar/getall');
  }

  addConta(conta:Conta): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin':'*',}  
    const body=JSON.stringify(conta);
    console.log("corpo da requisição" + body)
    return this.http.post('https://localhost:5001/ContasApagar', body,{'headers':headers})
  }
}
