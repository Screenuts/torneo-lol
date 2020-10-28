import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioTorneoComponent } from './dettaglio-torneo.component';

describe('DettaglioTorneoComponent', () => {
  let component: DettaglioTorneoComponent;
  let fixture: ComponentFixture<DettaglioTorneoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioTorneoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
