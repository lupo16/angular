import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostiCinemaComponent } from './posti-cinema.component';

describe('PostiCinemaComponent', () => {
  let component: PostiCinemaComponent;
  let fixture: ComponentFixture<PostiCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostiCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostiCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
