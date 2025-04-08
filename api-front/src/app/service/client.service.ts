import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlApi: string = 'http://localhost:8080';

  constructor(private client: HttpClient) {

  }
}
