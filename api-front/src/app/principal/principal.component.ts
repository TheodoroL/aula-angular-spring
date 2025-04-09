import { Component } from '@angular/core';
import { Client } from '../model/Client';
import { ClientService } from '../service/client.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  public client: Client = {
    id: 0,
    nome: '',
    idade: 0,
    cidade: ''
  };

  public btnCadestro: boolean = true;

  public clientes: Client[] = [];

  constructor(private service: ClientService) { }

  public selecionar(): void {
    this.service.selecionar()
      .subscribe(value => this.clientes = value);
  }
  public cadastrar(): void {
    this.service.cadastrar(this.client)
      .subscribe(retorno => {
        this.clientes.push(retorno);
        this.client = {
          id: 0,
          nome: '',
          idade: 0,
          cidade: ''
        };
        alert("Cliente Cadastrado com sucesso");
      });
  }



  public ngOnInit(): void {
    this.selecionar();
  }

}
