import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-common-products',
  templateUrl: './common-products.component.html',
  styleUrl: './common-products.component.scss',
  imports: [
    NgOptimizedImage
  ]
})

export class CommonProductsComponent {

  protected readonly products = [
    {
      name: "Fumigènes",
      image: "/img/home/famous-product/smoke.jpg"
    },
    {
      name: "Boule disco",
      image: "/img/home/famous-product/disco.jpg"
    },
    {
      name: "Luminaires mureaux",
      image: "/img/home/famous-product/light.avif"
    }
  ]
}
