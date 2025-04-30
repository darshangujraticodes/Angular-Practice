import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularloopComponent } from './angularloop.component';

describe('AngularloopComponent', () => {
  let component: AngularloopComponent;
  let fixture: ComponentFixture<AngularloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularloopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
