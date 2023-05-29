package com.dhebbora.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dhebbora.crudspring.model.Nota;
import com.dhebbora.crudspring.repository.NotaRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/notas")
@AllArgsConstructor
public class NotaController {

    private final NotaRepository notaRepository;

    @GetMapping
    public List<Nota> list(){
        return notaRepository.findAll();
    }
}
