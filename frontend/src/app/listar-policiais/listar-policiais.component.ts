import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PolicialService } from '../services/policial.service';

@Component({
  selector: 'app-listar-policiais',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './listar-policiais.component.html',
  styleUrls: ['./listar-policiais.component.css']
})
export class ListarPoliciaisComponent implements OnInit {
  policiais: any[] = [];
  policiaisFiltrados: any[] = [];
  cpfBusca: string = '';
  cpfErro: string = '';

  constructor(private service: PolicialService, private router: Router) { }

  voltarParaCadastro() {
    this.router.navigate(['/cadastrar-policial']);
  }

  ngOnInit() {
    this.service.listar().subscribe((dados: any) => {
      this.policiais = dados;
      this.policiaisFiltrados = dados;
    });
  }

  validarCpf(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^([0-9])\1+$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
  }

  buscarPorCpf() {
    this.cpfErro = '';
    const cpf = this.cpfBusca.trim();
    if (!cpf) {
      this.policiaisFiltrados = this.policiais;
      return;
    }
    if (cpf.length !== 11 || !this.validarCpf(cpf)) {
      this.policiaisFiltrados = [];
      this.cpfErro = 'Digite um CPF válido com 11 dígitos.';
      return;
    }
    this.policiaisFiltrados = this.policiais.filter(p => p.cpf && p.cpf === cpf);
    if (this.policiaisFiltrados.length === 0) {
      this.cpfErro = 'Nenhum policial encontrado para o CPF informado.';
    }
  }
}
