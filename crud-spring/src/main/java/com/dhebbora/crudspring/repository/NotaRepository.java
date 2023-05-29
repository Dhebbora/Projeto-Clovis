package com.dhebbora.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dhebbora.crudspring.model.Nota;

@Repository
public interface NotaRepository extends JpaRepository<Nota, Long> {
    
}
