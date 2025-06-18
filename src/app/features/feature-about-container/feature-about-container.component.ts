import { Component } from '@angular/core';
import { TopAboutComponent } from './top-about/top-about.component';

@Component({
  selector: 'app-feature-about-container',
  templateUrl: './feature-about-container.component.html',
  styleUrl: './feature-about-container.component.scss',
  imports: [
    TopAboutComponent
  ]
})

export class FeatureAboutContainerComponent {

}
