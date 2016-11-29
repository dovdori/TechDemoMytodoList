/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TODOinputComponent } from './todoinput.component';

describe('TODOinputComponent', () => {
  let component: TODOinputComponent;
  let fixture: ComponentFixture<TODOinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TODOinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TODOinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
