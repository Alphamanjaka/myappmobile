import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestinationPagePage } from './destination-page.page';

describe('DestinationPagePage', () => {
  let component: DestinationPagePage;
  let fixture: ComponentFixture<DestinationPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
