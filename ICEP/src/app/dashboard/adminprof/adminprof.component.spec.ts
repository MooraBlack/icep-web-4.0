import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprofComponent } from './adminprof.component';

describe('AdminprofComponent', () => {
  let component: AdminprofComponent;
  let fixture: ComponentFixture<AdminprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
