import { Component } from '@angular/core';
import { PacksComponent } from './components/packs/packs.component';

@Component({
  selector: 'app-feature-event-packs-container',
  templateUrl: './feature-event-packs-container.component.html',
  styleUrl: './feature-event-packs-container.component.scss',
  imports: [
    PacksComponent
  ]
})
export class FeatureEventPacksContainerComponent {

}
