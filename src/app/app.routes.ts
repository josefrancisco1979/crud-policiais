import { Routes } from '@angular/router';
import { CadastrarPolicialComponent } from './cadastrar-policial/cadastrar-policial.component';

export const routes: Routes = [
    { path: 'cadastrar-policial', component: CadastrarPolicialComponent },
    { path: '', redirectTo: 'cadastrar-policial', pathMatch: 'full' },
];
