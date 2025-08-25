import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPolicialComponent } from './cadastrar-policial.component';

describe('CadastrarPolicialComponent', () => {
  let component: CadastrarPolicialComponent;
  let fixture: ComponentFixture<CadastrarPolicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarPolicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarPolicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
