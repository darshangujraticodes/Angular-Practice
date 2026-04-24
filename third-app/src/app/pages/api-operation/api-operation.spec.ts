import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiOperation } from './api-operation';

describe('ApiOperation', () => {
  let component: ApiOperation;
  let fixture: ComponentFixture<ApiOperation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiOperation],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiOperation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
