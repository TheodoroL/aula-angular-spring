package br.com.theodorol.projeto.api.service.impl;

import org.springframework.stereotype.Service;

import br.com.theodorol.projeto.api.model.Cliente;
import br.com.theodorol.projeto.api.repository.ClienteRepository;
import br.com.theodorol.projeto.api.service.ClienteService;

@Service
public class ClienteServiceImpl implements ClienteService {
    private ClienteRepository db;

    public ClienteServiceImpl(ClienteRepository repository) {
        this.db = repository;
    }

    @Override
    public Cliente criarCliente(Cliente cliente) {
        if (cliente == null) {
            throw new RuntimeException("Cliente invalido");
        }
        return db.save(cliente);
    }

    @Override
    public Iterable<Cliente> pegarTodosClientes() {
        return db.findAll();
    }

    @Override
    public Cliente atualizarCliente(Long id, Cliente novoCliente) {
        return db.findById(id).map((cliente) -> {
            cliente.setNome(novoCliente.getNome());
            cliente.setIdade(novoCliente.getIdade());
            cliente.setCidade(novoCliente.getCidade());
            return db.save(cliente);
        }).orElseThrow(() -> new RuntimeException("Não foi possivel atualizar os dados"));
    }

    @Override
    public void deletarCliente(Long id) {
        db.deleteById(id);
    }
}
