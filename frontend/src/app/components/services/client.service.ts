import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { 
  ClientId, 
  Clients, Totals, 
  ClientDetails, 
  ClientDetailsTotals,
  ClientName,
  ClientDetailsName
} from './../client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Clients[]> {
    return this.http.get<Clients[]>(this.apiUrl)
  }

  getById(id: string): Observable<ClientId[]> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<ClientId[]>(url)
  }

  getByName(name: string): Observable<ClientName[]> {
    const url = `${this.apiUrl}/name/${name}`
    return this.http.get<ClientName[]>(url)
    .pipe(catchError(this.handleError))
  }  

  getGeneralTotals(): Observable<Totals[]> {
    const url = `${this.apiUrl}/totals`
    return this.http.get<Totals[]>(url)
  }

  getClientEnterprises(id: string): Observable<ClientDetails[]> {
    const url = `${this.apiUrl}/${id}/enterprise`
    return this.http.get<ClientDetails[]>(url)
  }

  getTotalsByCompany(id: string): Observable<ClientDetailsTotals[]> {
    const url = `${this.apiUrl}/${id}/totals`
    return this.http.get<ClientDetailsTotals[]>(url)
  }

  getClientDetailsByName(id: string, name: string): Observable<ClientDetailsName[]> {
    const url = `${this.apiUrl}/${id}/enterprise/name/${name}`
    return this.http.get<ClientDetailsName[]>(url)
    .pipe(catchError(this.handleError))
  }

  handleError(error) {
    return throwError(error)
  }
}