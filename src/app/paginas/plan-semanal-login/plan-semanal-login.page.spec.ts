import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanSemanalLoginPage } from './plan-semanal-login.page';

describe('PlanSemanalLoginPage', () => {
  let component: PlanSemanalLoginPage;
  let fixture: ComponentFixture<PlanSemanalLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSemanalLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
