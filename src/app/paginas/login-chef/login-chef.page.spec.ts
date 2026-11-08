import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginChefPage } from './login-chef.page';

describe('LoginChefPage', () => {
  let component: LoginChefPage;
  let fixture: ComponentFixture<LoginChefPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginChefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
