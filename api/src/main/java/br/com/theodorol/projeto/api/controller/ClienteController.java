package br.com.theodorol.projeto.api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.theodorol.projeto.api.service.ClienteService;
import br.com.theodorol.projeto.api.model.*;

@RestController
@RequestMapping("/client")
// resolvendo o problema de cors
@CrossOrigin(origins = "*")
public class ClienteController {
    private final ClienteService service;

    public ClienteController(ClienteService service) {
        this.service = service;
    }

    @GetMapping
    public Iterable<Cliente> pgarTodosClientes() {
        return service.pegarTodosClientes();
    }

    @PostMapping
    public Cliente criarCliente(@RequestBody Cliente cliente) {
        var clienteCriado = service.criarCliente(cliente);
        return clienteCriado;
    }

    @PutMapping("/{id}")
    public Cliente atualizarCliente(@PathVariable long id, @RequestBody Cliente cliente) {
        return service.atualizarCliente(id, cliente);
    }

    @DeleteMapping("/{id}")
    public void deletarCliente(@PathVariable Long id) {
        service.deletarCliente(id);

    }
}
