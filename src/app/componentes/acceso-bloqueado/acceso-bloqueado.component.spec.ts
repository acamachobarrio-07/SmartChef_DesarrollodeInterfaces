import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoBloqueadoComponent } from './acceso-bloqueado.component';

describe('AccesoBloqueadoComponent', () => {
  let component: AccesoBloqueadoComponent;
  let fixture: ComponentFixture<AccesoBloqueadoComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoBloqueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
