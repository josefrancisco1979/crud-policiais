import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPoliciaisComponent } from './listar-policiais.component';

describe('ListarPoliciaisComponent', () => {
  let component: ListarPoliciaisComponent;
  let fixture: ComponentFixture<ListarPoliciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPoliciaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPoliciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
