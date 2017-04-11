import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideNavFabComponent } from './slide-nav-fab.component';

describe('SlideNavFabComponent', () => {
  let component: SlideNavFabComponent;
  let fixture: ComponentFixture<SlideNavFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideNavFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideNavFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
