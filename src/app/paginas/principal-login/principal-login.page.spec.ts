import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalLoginPage } from './principal-login.page';

describe('PrincipalLoginPage', () => {
  let component: PrincipalLoginPage;
  let fixture: ComponentFixture<PrincipalLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
