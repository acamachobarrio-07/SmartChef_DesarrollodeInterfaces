import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirIngredientesPage } from './anadir-ingredientes.page';

describe('AnadirIngredientesPage', () => {
  let component: AnadirIngredientesPage;
  let fixture: ComponentFixture<AnadirIngredientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirIngredientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
