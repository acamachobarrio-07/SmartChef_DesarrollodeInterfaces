import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingRecetasComponent } from './ranking-recetas.component';

describe('RankingRecetasComponent', () => {
  let component: RankingRecetasComponent;
  let fixture: ComponentFixture<RankingRecetasComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
