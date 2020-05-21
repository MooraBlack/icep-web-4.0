import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPostsComponent } from './ad-posts.component';

describe('AdPostsComponent', () => {
  let component: AdPostsComponent;
  let fixture: ComponentFixture<AdPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
