package com.dhebbora.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.dhebbora.crudspring.model.Nota;

import com.dhebbora.crudspring.repository.NotaRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(NotaRepository notaRepository){
		return args -> {
			notaRepository.deleteAll();

			Nota c = new Nota();
			c.setName("Akira");
			c.setTurma("Manhã");
			c.setSituacao("Aprovado");
			c.setNota1("8");
			c.setNota2("7");
			c.setTrabalhos("0");
			c.setPvfinal("10");
			c.setMedia("10");

			notaRepository.save(c);
		};
	}
}
