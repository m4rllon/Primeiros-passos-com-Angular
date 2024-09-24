import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamentos',
    pathMatch: 'full',
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent,
  },
  {
    path: 'listarPensamentos',
    component: ListarPensamentosComponent,
  },
  {
    path: 'listarPensamentos/pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent,
  },
  {
    path: 'listarPensamentos/pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
