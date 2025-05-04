import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulareffectComponent } from './angulareffect.component';

describe('AngulareffectComponent', () => {
  let component: AngulareffectComponent;
  let fixture: ComponentFixture<AngulareffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngulareffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngulareffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
