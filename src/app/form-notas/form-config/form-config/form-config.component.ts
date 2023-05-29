import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-config',
  templateUrl: './form-config.component.html',
  styleUrls: ['./form-config.component.css']
})
export class FormConfigComponent {

  form: FormGroup;

  constructor(
    private formBilder: FormBuilder){
      this.form = this.formBilder.group({
        name: [null],
        turma: [null],
        situacao: [null],
        nota1: [null],
        nota2: [null],
        trabalhos: [null],
        pvfinal: [null],
        media:  [null]
      });
    }


}
