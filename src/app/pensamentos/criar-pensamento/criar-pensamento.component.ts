import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Pensamento from 'src/app/components/pensamentos/pensamento';
import { PensamentoService } from 'src/app/components/pensamentos/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  constructor(private service: PensamentoService, private router: Router ) { }

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(()=> {
      this.router.navigate(['/listarPensamentos'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamentos'])
  }
  ngOnInit(): void {
  }

}
