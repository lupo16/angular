import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LepippeComponent } from './lepippe.component';

describe('LepippeComponent', () => {
  let component: LepippeComponent;
  let fixture: ComponentFixture<LepippeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LepippeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LepippeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
