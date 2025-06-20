import { Component } from '@angular/core';
import { DescriptionComponent } from './components/description/description.component';
import { AboutHeroComponent } from './components/about-hero/about-hero.component';
import { OurEngagementsComponent } from './components/our-engagements/our-engagements.component';

@Component({
  selector: 'app-feature-about-container',
  templateUrl: './feature-about-container.component.html',
  styleUrl: './feature-about-container.component.scss',
  imports: [
    AboutHeroComponent,
    DescriptionComponent,
    OurEngagementsComponent
  ]
})

export class FeatureAboutContainerComponent {

}
