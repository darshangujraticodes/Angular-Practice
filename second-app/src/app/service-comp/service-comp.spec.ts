import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComp } from './service-comp';

describe('ServiceComp', () => {
  let component: ServiceComp;
  let fixture: ComponentFixture<ServiceComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceComp],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
