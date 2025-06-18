import { NgOptimizedImage } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage
  ]
})
export class ServicesComponent {
  protected readonly bookingLink = "";
}
