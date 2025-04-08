import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlApi: string = 'http://localhost:8080';

  constructor(private client: HttpClient) {

  }
  //vai fazer um request do tipo get 
  public selecionar(): Observable<Client[]> {
    return this.client.get<Client[]>(this.urlApi);
  }
}
