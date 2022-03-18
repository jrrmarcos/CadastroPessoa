import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  lista1 : Pessoa[] = [ 
    {name:"Marcos", dtnasc:"01/01/1900", imagem: "https://www.thispersondoesnotexist.com/image"},
    {name:"João", dtnasc:"01/01/1900", imagem: "https://www.thispersondoesnotexist.com/image"}
  ]


  @Input() lista: Pessoa[] = [];

  adicionarPessoa(pessoa: Pessoa) {
    this.lista.push(pessoa)
  }

  deletarPessoa(delPessoa: Pessoa) {
    alert(JSON.stringify(this.lista));
    const index = this.lista.findIndex(pessoa => pessoa.name == delPessoa.name)
    if(index>-1){
      this.lista.splice(index,1);
    }
    return this.lista; 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
