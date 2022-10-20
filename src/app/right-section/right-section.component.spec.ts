import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSectionComponent } from './right-section.component';

describe('RightSectionComponent', () => {
  let component: RightSectionComponent;
  let fixture: ComponentFixture<RightSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
