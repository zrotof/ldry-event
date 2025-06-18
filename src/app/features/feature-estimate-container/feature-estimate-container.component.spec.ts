import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEstimateContainerComponent } from './feature-estimate-container.component';

describe('FeatureEstimateContainerComponent', () => {
  let component: FeatureEstimateContainerComponent;
  let fixture: ComponentFixture<FeatureEstimateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureEstimateContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureEstimateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
