import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaIngredienteComponent } from './tarjeta-ingrediente.component';

describe('TarjetaIngredienteComponent', () => {
  let component: TarjetaIngredienteComponent;
  let fixture: ComponentFixture<TarjetaIngredienteComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
