import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})

export class CadastroPessoaComponent implements OnInit {

  nome: string = ""
  dtnasc: string = ""
  imagem: string = ""

  listaPessoa: Pessoa[] = [
    { name: 'Marcos', dtnasc: '1997-06-27', imagem: 'https://www.thispersondoesnotexist.com/image' },
  ]

  onSubmit() {
    const pessoa: Pessoa = {
      name: this.nome,
      dtnasc: this.dtnasc,
      imagem: this.imagem
    }

    //Validação de nome já existente
    if (!this.getPessoa(pessoa)) {
      if (pessoa.imagem == "") pessoa.imagem = 'https://www.thispersondoesnotexist.com/image'
      this.adicionarPessoa(pessoa)
    } else {
      alert("Nome já utilizado!")
    }
  }

  adicionarPessoa(pessoa: Pessoa): void {
    this.listaPessoa.push(pessoa)
    alert(JSON.stringify(this.listaPessoa));
  }

  getPessoa(getPessoa: Pessoa) {
    const index = this.listaPessoa.findIndex(pessoa => pessoa.name == getPessoa.name)
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
