import { Component } from '@angular/core';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { ServicesComponent } from './components/services/services.component';
import { CommonProductsComponent } from './components/common-products/common-products.component';
import { EventTypesOrganizedComponent } from './components/event-types-organized/event-types-organized.component';

@Component({
  selector: 'app-feature-home-container',
  templateUrl: './feature-home-container.component.html',
  styleUrl: './feature-home-container.component.scss',
  imports: [
    HeroBannerComponent,
    EventTypesOrganizedComponent,
    CommonProductsComponent,
    ServicesComponent
  ]
})

export class FeatureHomeContainerComponent {


}
