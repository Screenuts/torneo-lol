import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTorneoComponent } from './home-torneo.component';

describe('HomeTorneoComponent', () => {
  let component: HomeTorneoComponent;
  let fixture: ComponentFixture<HomeTorneoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTorneoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
