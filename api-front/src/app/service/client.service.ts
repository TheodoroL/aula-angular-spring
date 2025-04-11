import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlApi: string = 'http://localhost:8080/client';

  constructor(private client: HttpClient) {

  }
  //vai fazer um request do tipo get 
  public selecionar(): Observable<Client[]> {
    return this.client.get<Client[]>(this.urlApi);
  }
  //adicionando o cadastrar
  public cadastrar(obj: Client): Observable<Client> {
    const { id, ...client } = obj;
    return this.client.post<Client>(this.urlApi, client);
  }
  //editar o cliente
  public editar(obj: Client): Observable<Client> {
    const { id, ...client } = obj;
    return this.client.put<Client>(`${this.urlApi}/${id}`, client);
  }

  public remover(id: number): Observable<void> {
    return this.client.delete<void>(`${this.urlApi}/${id}`);
  }
}
