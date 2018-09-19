import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHomeComponent } from './profile-home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ProfileHomeComponent', () => {
  let component: ProfileHomeComponent;
  let fixture: ComponentFixture<ProfileHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHomeComponent ],
      imports: [ RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
