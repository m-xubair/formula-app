import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEquationsComponent } from './manage-equations.component';

describe('ManageEquationsComponent', () => {
  let component: ManageEquationsComponent;
  let fixture: ComponentFixture<ManageEquationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEquationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEquationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
