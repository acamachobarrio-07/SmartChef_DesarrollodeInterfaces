import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionRecetaComponent } from './confirmacion-receta.component';

describe('ConfirmacionRecetaComponent', () => {
  let component: ConfirmacionRecetaComponent;
  let fixture: ComponentFixture<ConfirmacionRecetaComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
