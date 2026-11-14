import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCompraLoginPage } from './lista-compra-login.page';

describe('ListaCompraLoginPage', () => {
  let component: ListaCompraLoginPage;
  let fixture: ComponentFixture<ListaCompraLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCompraLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
