import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Pessoa } from 'src/model/pessoa';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoa : Pessoa = {
    nome: '',
    idade: 0,
    imagem: ''
  }

  constructor() {}

  ngOnInit(): void {
  }

}
