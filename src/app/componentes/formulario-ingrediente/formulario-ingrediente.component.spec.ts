import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIngredienteComponent } from './formulario-ingrediente.component';

describe('FormularioIngredienteComponent', () => {
  let component: FormularioIngredienteComponent;
  let fixture: ComponentFixture<FormularioIngredienteComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
