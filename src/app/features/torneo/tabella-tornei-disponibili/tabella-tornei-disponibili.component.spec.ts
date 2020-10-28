import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaTorneiDisponibiliComponent } from './tabella-tornei-disponibili.component';

describe('TabellaTorneiDisponibiliComponent', () => {
  let component: TabellaTorneiDisponibiliComponent;
  let fixture: ComponentFixture<TabellaTorneiDisponibiliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabellaTorneiDisponibiliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellaTorneiDisponibiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
