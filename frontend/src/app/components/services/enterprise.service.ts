import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Enterprises } from '../enterprise.model';
import { EnterpriseName } from './../enterprise.model';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }

  getAllEnterprises(): Observable<Enterprises[]> {
    return this.http.get<Enterprises[]>(`${this.apiUrl}/enterprise`)
  }

  getEnterpriseByName(name: string): Observable<EnterpriseName[]> {
    const url = `${this.apiUrl}/enterprise/name/${name}`
    return this.http.get<EnterpriseName[]>(url)
    .pipe(catchError(this.handleError))
  }

  handleError(error) {
    return throwError(error)
  }
}
