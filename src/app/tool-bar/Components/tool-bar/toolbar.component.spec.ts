import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Toolbar } from './toolbar.component.component';

describe('Toolbar', () => {
  let component: Toolbar;
  let fixture: ComponentFixture<Toolbar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Toolbar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Toolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
