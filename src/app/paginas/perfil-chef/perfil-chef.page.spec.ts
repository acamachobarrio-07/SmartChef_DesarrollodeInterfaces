import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilChefPage } from './perfil-chef.page';

describe('PerfilChefPage', () => {
  let component: PerfilChefPage;
  let fixture: ComponentFixture<PerfilChefPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilChefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
