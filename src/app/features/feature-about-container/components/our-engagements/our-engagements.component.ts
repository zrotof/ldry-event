import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-engagements',
  templateUrl: './our-engagements.component.html',
  styleUrl: './our-engagements.component.scss',
  imports: [
    NgOptimizedImage
  ]
})

export class OurEngagementsComponent {
  protected readonly engagements = [
  {
    icon: 'pi pi-volume-up',
    title: 'Ambiance musicale personnalisée',
    description: "Nous adaptons chaque playlist à votre style, à votre public et à l’ambiance souhaitée pour garantir une atmosphère sur-mesure et mémorable."
  },
  {
    icon: 'pi pi-cog',
    title: 'Matériel son & lumière professionnel',
    description: "Nous fournissons à la location un équipement haut de gamme, fiable et adapté à la taille et au type de votre événement, pour un rendu visuel et sonore optimal."
  },
  {
    icon: 'pi pi-file-edit',
    title: 'Préparation rigoureuse en amont',
    description: "Chaque prestation est précédée d’un échange avec vous pour définir les besoins, valider la playlist, et organiser chaque étape de l’animation."
  },
  {
    icon: 'pi pi-clock',
    title: 'Respect strict du planning et des horaires',
    description: "Nous intervenons avec ponctualité et précision, dans le respect du déroulement prévu, pour une organisation fluide du début à la fin de votre événement."
  },
  {
    icon: 'pi pi-users',
    title: 'Animation humaine, dynamique et inclusive',
    description: "Nos DJ assurent une ambiance positive, respectueuse et festive, pour faire danser toutes les générations dans une atmosphère bienveillante."
  }
];
}
