/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectionTwoColInvertComponent } from './section-two-col-invert.component';

describe('SectionTwoColInvertComponent', () => {
  let component: SectionTwoColInvertComponent;
  let fixture: ComponentFixture<SectionTwoColInvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTwoColInvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTwoColInvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
