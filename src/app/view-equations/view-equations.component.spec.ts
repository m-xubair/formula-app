import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEquationsComponent } from './view-equations.component';

describe('ViewEquationsComponent', () => {
  let component: ViewEquationsComponent;
  let fixture: ComponentFixture<ViewEquationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEquationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEquationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
