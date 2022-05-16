import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {

  constructor(private Http: HttpClient) { }

  list(): Observable<any> {
    return this.Http.get(`${baseUrl}/correntistas`);
  }

  create(correntista:any): Observable<any> {
    return this.Http.post(`${baseUrl}/correntistas`,correntista);
  }

}
