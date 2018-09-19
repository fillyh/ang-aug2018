import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContactComponent } from './profile-contact.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ProfilecontactComponent', () => {
  let component: ProfileContactComponent;
  let fixture: ComponentFixture<ProfileContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileContactComponent ],
      schemas: [ NO_ERRORS_SCHEMA],
      imports: [ RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
