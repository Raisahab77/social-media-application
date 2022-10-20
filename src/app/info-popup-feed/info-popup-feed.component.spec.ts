import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPopupFeedComponent } from './info-popup-feed.component';

describe('InfoPopupFeedComponent', () => {
  let component: InfoPopupFeedComponent;
  let fixture: ComponentFixture<InfoPopupFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPopupFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPopupFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
