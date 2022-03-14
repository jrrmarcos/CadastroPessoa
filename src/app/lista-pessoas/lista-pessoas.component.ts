import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  lista : Pessoa[] = [ 
    {name:"Marcos", dtnasc:"01/01/1900", imagem: "https://www.thispersondoesnotexist.com/image"},
    {name:"João", dtnasc:"01/01/1900", imagem: "https://www.thispersondoesnotexist.com/image"}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
