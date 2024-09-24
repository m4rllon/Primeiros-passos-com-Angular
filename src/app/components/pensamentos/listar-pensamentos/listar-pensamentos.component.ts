import { Component, OnInit } from '@angular/core';
import Pensamento from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = []

  constructor(private service: PensamentoService) { }

  //Toda lógica que vc deseja executar quando o componente é renderizado, vc deve colocar dentro do escopo do ngOnInit
  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {this.listaPensamentos = listaPensamentos})
  }
}
