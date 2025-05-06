import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngualardirectivesComponent } from './angualardirectives.component';

describe('AngualardirectivesComponent', () => {
  let component: AngualardirectivesComponent;
  let fixture: ComponentFixture<AngualardirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngualardirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngualardirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
