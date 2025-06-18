import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-types-organized',
  templateUrl: './event-types-organized.component.html',
  styleUrl: './event-types-organized.component.scss',
  imports: [
    NgOptimizedImage,
    RouterLink
  ]
})

export class EventTypesOrganizedComponent {

  protected readonly eventTypes = [
    {
      image: "/img/home/event-types/mariage.png",
      name: "Mariages"
    },
    {
      image: "/img/home/event-types/dj.png",
      name: "Festivals"
    },
    {
      image: "/img/home/event-types/anniversaire.png",
      name: "Anniversaires"
    },
    {
      image: "/img/home/event-types/company.png",
      name: "soirées d’entreprise"
    }
  ]
}
