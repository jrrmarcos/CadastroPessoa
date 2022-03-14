import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  cadastro : Pessoa = {
    name: 'Marcos',
    dtnasc: '27/06/1997',
    imagem: 'https://www.thispersondoesnotexist.com/image'
  }

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

}
