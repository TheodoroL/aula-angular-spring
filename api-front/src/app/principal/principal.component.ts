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
        this.messagemAlert("Cliente Cadastrado com sucesso!");

      });
  }

  public editar(): void {
    this.service.editar(this.client)
      .subscribe(retorno => {
        const pos = this.clientes.findIndex(obj => obj.id == retorno.id);
        this.clientes[pos] = retorno;
        this.client = new Client();
        this.tabelaEBtnIsTrue();
        this.messagemAlert("Cliente alterado com sucesso!");
      });
  }

  //função para selecionar o cliente
  public selecionarClient(pos: number): void {
    //pega os dados que foi selecionado o cliente
    this.client = this.clientes[pos];
    this.tabelaEBtnIsFalse();
  }
  public cancelarSelecao(): void {
    this.client = new Client();
    this.tabelaEBtnIsTrue();

  }

  public ngOnInit(): void {
    this.selecionar();
  }

  private tabelaEBtnIsTrue(): void {
    this.btnCadestro = true;
    this.tabela = true;

  }
  private tabelaEBtnIsFalse(): void {
    this.btnCadestro = false;
    this.tabela = false;

  }
  private messagemAlert(mensagem: string): void {
    alert(mensagem);

  }
}
