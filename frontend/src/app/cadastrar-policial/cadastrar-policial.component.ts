// Removido bloco duplicado fora da classe
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PolicialService } from '../services/policial.service';

@Component({
  selector: 'app-cadastrar-policial',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastrar-policial.component.html',
  styleUrls: ['./cadastrar-policial.component.css']
})
export class CadastrarPolicialComponent implements OnInit {
  policialForm;
  loading = false;
  successMsg = '';
  errorMsg = '';
  policiais: any[] = [];
  cpfErro: string = '';

  constructor(private fb: FormBuilder, private service: PolicialService, private router: Router) {
    this.policialForm = this.fb.group({
      rg_civil: ['', Validators.required],
      rg_militar: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      data_nascimento: ['', Validators.required],
      matricula: ['', Validators.required],
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

  ngOnInit() {
    this.carregarPoliciais();
  }

  carregarPoliciais() {
    this.service.listar().subscribe((dados: any) => {
      this.policiais = dados;
    });
  }

  onSubmit() {
    this.successMsg = '';
    this.errorMsg = '';
    this.cpfErro = '';
    if (!this.policialForm.valid) {
      this.errorMsg = 'Preencha todos os campos obrigatórios corretamente.';
      return;
    }
    const cpf = this.policialForm.get('cpf')?.value || '';
    if (!this.validarCpf(cpf)) {
      this.cpfErro = 'Digite um CPF válido com 11 dígitos.';
      return;
    }
    this.loading = true;
    this.service.cadastrar(this.policialForm.value).subscribe({
      next: () => {
        this.successMsg = 'Policial cadastrado com sucesso!';
        this.policialForm.reset();
        this.loading = false;
        // Redireciona para a listagem após cadastrar
        this.router.navigate(['/listar-policiais']);
      },
      error: (err) => {
        this.errorMsg = 'Erro ao cadastrar policial. Tente novamente.';
        this.loading = false;
      }
    });
  }

  verPoliciais() {
    this.router.navigate(['/listar-policiais']);
  }
}
