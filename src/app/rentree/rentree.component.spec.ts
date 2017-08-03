/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentreeComponent } from './rentree.component';

describe('RentreeComponent', () => {
  let component: RentreeComponent;
  let fixture: ComponentFixture<RentreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
