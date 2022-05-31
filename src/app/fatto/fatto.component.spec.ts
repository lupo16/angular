import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FattoComponent } from './fatto.component';

describe('FattoComponent', () => {
  let component: FattoComponent;
  let fixture: ComponentFixture<FattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FattoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
