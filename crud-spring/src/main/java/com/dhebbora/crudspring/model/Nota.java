package com.dhebbora.crudspring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Nota {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column (length = 60, nullable = false)
    private String name;
    @Column (length = 60, nullable = false)
    private String turma;
    @Column (length = 60, nullable = false)
    private String situacao;
    @Column (length = 60, nullable = false)
    private String nota1;
    @Column (length = 60, nullable = false)
    private String nota2;
    @Column (length = 60, nullable = false)
    private String trabalhos;
    @Column (length = 60, nullable = false)
    private String pvfinal;
    @Column (length = 60, nullable = false)
    private String media;
}
