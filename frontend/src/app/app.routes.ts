import { Routes } from '@angular/router';
import { CadastrarPolicialComponent } from './cadastrar-policial/cadastrar-policial.component';
import { ListarPoliciaisComponent } from './listar-policiais/listar-policiais.component';

export const routes: Routes = [
    { path: 'cadastrar-policial', component: CadastrarPolicialComponent },
    { path: 'listar-policiais', component: ListarPoliciaisComponent },
    { path: '', redirectTo: 'cadastrar-policial', pathMatch: 'full' },
];
