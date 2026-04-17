import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularForm } from './angular-form';

describe('AngularForm', () => {
  let component: AngularForm;
  let fixture: ComponentFixture<AngularForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
