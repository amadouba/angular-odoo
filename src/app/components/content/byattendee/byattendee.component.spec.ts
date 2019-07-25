import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByattendeeComponent } from './byattendee.component';

describe('ByattendeeComponent', () => {
  let component: ByattendeeComponent;
  let fixture: ComponentFixture<ByattendeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByattendeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByattendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
