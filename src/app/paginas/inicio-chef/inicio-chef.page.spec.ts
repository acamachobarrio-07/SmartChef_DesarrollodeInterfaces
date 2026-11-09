import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioChefPage } from './inicio-chef.page';

describe('InicioChefPage', () => {
  let component: InicioChefPage;
  let fixture: ComponentFixture<InicioChefPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioChefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
