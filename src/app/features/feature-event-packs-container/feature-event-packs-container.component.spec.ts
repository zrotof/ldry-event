import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEventPacksContainerComponent } from './feature-event-packs-container.component';

describe('FeatureEventPacksContainerComponent', () => {
  let component: FeatureEventPacksContainerComponent;
  let fixture: ComponentFixture<FeatureEventPacksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureEventPacksContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureEventPacksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
