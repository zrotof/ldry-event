import { Component } from '@angular/core';
import { PacksComponent } from './components/packs/packs.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ReasonToChooseUsComponent } from './components/reason-to-choose-us/reason-to-choose-us.component';

@Component({
  selector: 'app-feature-event-packs-container',
  templateUrl: './feature-event-packs-container.component.html',
  styleUrl: './feature-event-packs-container.component.scss',
  imports: [
    PacksComponent,
    ReasonToChooseUsComponent,
    FaqsComponent
  ]
})
export class FeatureEventPacksContainerComponent {

}
