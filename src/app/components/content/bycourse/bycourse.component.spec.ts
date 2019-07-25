import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BycourseComponent } from './bycourse.component';

describe('BycourseComponent', () => {
  let component: BycourseComponent;
  let fixture: ComponentFixture<BycourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BycourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BycourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
