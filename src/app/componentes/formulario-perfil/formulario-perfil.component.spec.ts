import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPerfilComponent } from './formulario-perfil.component';

describe('FormularioPerfilComponent', () => {
  let component: FormularioPerfilComponent;
  let fixture: ComponentFixture<FormularioPerfilComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
