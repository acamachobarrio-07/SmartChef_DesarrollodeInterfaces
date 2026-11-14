import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColeccionesLoginPage } from './colecciones-login.page';

describe('ColeccionesLoginPage', () => {
  let component: ColeccionesLoginPage;
  let fixture: ComponentFixture<ColeccionesLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionesLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
