import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAboutContainerComponent } from './feature-about-container.component';

describe('FeatureAboutContainerComponent', () => {
  let component: FeatureAboutContainerComponent;
  let fixture: ComponentFixture<FeatureAboutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAboutContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureAboutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
