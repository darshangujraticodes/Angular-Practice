import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularsignalsComponent } from './angularsignals.component';

describe('AngularsignalsComponent', () => {
  let component: AngularsignalsComponent;
  let fixture: ComponentFixture<AngularsignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularsignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularsignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
