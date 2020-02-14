import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesTodosComponent } from './listes-todos.component';

describe('ListesTodosComponent', () => {
  let component: ListesTodosComponent;
  let fixture: ComponentFixture<ListesTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
