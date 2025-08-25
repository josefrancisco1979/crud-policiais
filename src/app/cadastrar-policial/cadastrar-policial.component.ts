// Removido bloco duplicado fora da classe
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PolicialService } from '../services/policial.service';

@Component({
  selector: 'app-cadastrar-policial',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastrar-policial.component.html',
})
export class CadastrarPolicialComponent implements OnInit {
  policialForm;
  loading = false;
  successMsg = '';
  errorMsg = '';
  policiais: any[] = [];

  constructor(private fb: FormBuilder, private service: PolicialService) {
    this.policialForm = this.fb.group({
      rg_civil: ['', Validators.required],
      rg_militar: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      data_nascimento: ['', Validators.required],
      matricula: ['', Validators.required],
    });
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
    if (this.policialForm.valid) {
      this.loading = true;
      this.service.cadastrar(this.policialForm.value).subscribe({
        next: () => {
          this.successMsg = 'Policial cadastrado com sucesso!';
          this.policialForm.reset();
          this.loading = false;
          this.carregarPoliciais();
        },
        error: (err) => {
          this.errorMsg = 'Erro ao cadastrar policial. Tente novamente.';
          this.loading = false;
        }
      });
    }
  }
}
