import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDespensaComponent } from './formulario-despensa.component';

describe('FormularioDespensaComponent', () => {
  let component: FormularioDespensaComponent;
  let fixture: ComponentFixture<FormularioDespensaComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDespensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
