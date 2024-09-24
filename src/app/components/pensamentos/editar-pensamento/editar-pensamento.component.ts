import { Component, Input, OnInit } from '@angular/core';
import Pensamento from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  constructor(
    private service: PensamentoService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => this.pensamento = pensamento)
  }

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  }

  editarPensamento(){
    this.service.editar(this.pensamento).subscribe(() => this.router.navigate([`/listarPensamentos`]))
  }

  cancelar(){
    this.router.navigate([`/listarPensamentos`])
  }


}
