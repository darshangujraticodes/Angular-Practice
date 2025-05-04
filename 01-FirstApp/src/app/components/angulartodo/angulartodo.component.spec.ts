import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulartodoComponent } from './angulartodo.component';

describe('AngulartodoComponent', () => {
  let component: AngulartodoComponent;
  let fixture: ComponentFixture<AngulartodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngulartodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngulartodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
