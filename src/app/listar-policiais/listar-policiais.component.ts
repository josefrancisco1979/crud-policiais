import { Component, OnInit } from '@angular/core';
import { PolicialService } from '../services/policial.service';

@Component({
  selector: 'app-listar-policiais',
  standalone: true,
  templateUrl: './listar-policiais.component.html',
})
export class ListarPoliciaisComponent implements OnInit {
  policiais: any[] = [];

  constructor(private service: PolicialService) {}

  ngOnInit() {
    this.service.listar().subscribe((dados: any) => {
      this.policiais = dados;
    });
  }
}
