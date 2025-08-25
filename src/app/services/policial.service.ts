import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PolicialService {
  private api = 'http://localhost:3000/policiais';

  constructor(private http: HttpClient) {}

  cadastrar(dados: any) {
    return this.http.post(this.api, dados);
  }

  listar() {
    return this.http.get(this.api);
  }
}
