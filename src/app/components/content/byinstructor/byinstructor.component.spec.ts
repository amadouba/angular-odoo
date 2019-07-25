import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByinstructorComponent } from './byinstructor.component';

describe('ByinstructorComponent', () => {
  let component: ByinstructorComponent;
  let fixture: ComponentFixture<ByinstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByinstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByinstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
