import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsShopComponent } from './instruments.component';

describe('InstrumentsComponent', () => {
  let component: InstrumentsShopComponent;
  let fixture: ComponentFixture<InstrumentsShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentsShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
