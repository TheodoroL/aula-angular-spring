import { Component } from '@angular/core';
import { Client } from '../model/Client';
import { ClientService } from '../service/client.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  public client: Client = new Client();

  public btnCadestro: boolean = true;

  public clientes: Client[] = [];
  public tabela: boolean = true;

  constructor(private service: ClientService) { }

  public selecionar(): void {
    this.service.selecionar()
      .subscribe(value => this.clientes = value);
  }
  public cadastrar(): void {
    this.service.cadastrar(this.client)
      .subscribe(retorno => {
        this.clientes.push(retorno);
        this.client = new Client();
        alert("Cliente Cadastrado com sucesso");
      });
  }
  //função para selecionar o cliente
  public selecionarClient(pos: number): void {
    //pega os dados que foi selecionado o cliente
    this.client = this.clientes[pos];
    //o botão de cadastro é desativado
    this.btnCadestro = false;
    //a tabela some
    this.tabela = false;
  }
  public cancelarSelecao(): void {
    this.client = new Client();
    this.btnCadestro = true;
    this.tabela = true;


  }

  public ngOnInit(): void {
    this.selecionar();
  }

}
