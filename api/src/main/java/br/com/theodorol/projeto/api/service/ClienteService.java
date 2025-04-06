package br.com.theodorol.projeto.api.service;

import br.com.theodorol.projeto.api.model.*;

public interface ClienteService {
    public Cliente criarCliente(Cliente cliente);

    public Iterable<Cliente> pegarTodosClientes();

    public Cliente atualizarCliente(Long id, Cliente novoCliente);

    public void deletarCliente(Long id);
}
