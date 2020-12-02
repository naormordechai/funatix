import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMarketContainerComponent } from './transfer-market-container.component';

describe('TransferMarketContainerComponent', () => {
  let component: TransferMarketContainerComponent;
  let fixture: ComponentFixture<TransferMarketContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferMarketContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferMarketContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
