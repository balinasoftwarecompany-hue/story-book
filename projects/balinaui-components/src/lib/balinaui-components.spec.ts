import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalinauiComponents } from './balinaui-components';

describe('BalinauiComponents', () => {
  let component: BalinauiComponents;
  let fixture: ComponentFixture<BalinauiComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalinauiComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(BalinauiComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
