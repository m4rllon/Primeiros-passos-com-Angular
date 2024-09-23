import { Component, OnInit } from '@angular/core';
import Pensamento from 'src/app/components/pensamentos/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  }

  criarPensamento(){
    alert('Criou')
  }

  cancelar(){
    alert('Cancelou')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
