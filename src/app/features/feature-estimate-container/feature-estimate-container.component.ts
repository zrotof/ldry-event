import { Component } from '@angular/core';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-feature-estimate-container',
  templateUrl: './feature-estimate-container.component.html',
  styleUrl: './feature-estimate-container.component.scss',
  imports: [
    HeroBannerComponent
  ],
})
export class FeatureEstimateContainerComponent {

}
