package br.com.theodorol.projeto.api.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.theodorol.projeto.api.model.Cliente;

public interface ClienteRepository extends CrudRepository<Cliente, Long> {

}
