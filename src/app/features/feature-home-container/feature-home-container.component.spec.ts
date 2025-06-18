import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureHomeContainerComponent } from './feature-home-container.component';

describe('FeatureHomeContainerComponent', () => {
  let component: FeatureHomeContainerComponent;
  let fixture: ComponentFixture<FeatureHomeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureHomeContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
