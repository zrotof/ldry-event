import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProductsContainerComponent } from './feature-products-container.component';

describe('FeatureProductsContainerComponent', () => {
  let component: FeatureProductsContainerComponent;
  let fixture: ComponentFixture<FeatureProductsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureProductsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureProductsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
