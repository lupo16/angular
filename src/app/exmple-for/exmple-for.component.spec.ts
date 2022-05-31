import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmpleForComponent } from './exmple-for.component';

describe('ExmpleForComponent', () => {
  let component: ExmpleForComponent;
  let fixture: ComponentFixture<ExmpleForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmpleForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExmpleForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
