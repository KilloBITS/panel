import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsTournamentComponent } from './instruments.component';

describe('InstrumentsComponent', () => {
  let component: InstrumentsTournamentComponent;
  let fixture: ComponentFixture<InstrumentsTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentsTournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentsTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
