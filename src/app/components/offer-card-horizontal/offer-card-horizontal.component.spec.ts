import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OfferCardHorizontalComponent } from './offer-card-horizontal.component';

describe('OfferCardHorizontalComponent', () => {
  let component: OfferCardHorizontalComponent;
  let fixture: ComponentFixture<OfferCardHorizontalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [OfferCardHorizontalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferCardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
