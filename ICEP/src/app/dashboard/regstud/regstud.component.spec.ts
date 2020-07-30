import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegstudComponent } from './regstud.component';

describe('RegstudComponent', () => {
  let component: RegstudComponent;
  let fixture: ComponentFixture<RegstudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegstudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
