import { Component } from '@angular/core';

@Component({
  selector: 'app-packs',
  imports: [],
  templateUrl: './packs.component.html',
  styleUrl: './packs.component.scss'
})
export class PacksComponent {

  protected readonly packs = [
  {
    id: 1,
    title: "Pack Classique",
    description: "Sonorisation standard et ambiance musicale pour vos événements jusqu'à 100 personnes.",
    price: "150 €",
    image: "assets/images/packs/classique.jpg",
    includes: [
      "1 DJ professionnel",
      "2 enceintes de sonorisation",
      "Table de mixage numérique",
      "Jeux de lumières simples",
      "Playlist personnalisée",
      "Installation et démontage inclus",
      "1 micro filaire",
      "Câblage audio complet",
      "Assistance technique sur place",
      "Déplacement inclus dans un rayon de 20 km"
    ]
  },
  {
    id: 2,
    title: "Pack Mariage Premium",
    description: "Animation complète de votre mariage : cérémonie, vin d’honneur et soirée dansante.",
    price: "450 €",
    image: "assets/images/packs/mariage.jpg",
    includes: [
      "1 DJ professionnel spécialisé mariage",
      "Sonorisation complète de la cérémonie",
      "Éclairage LED d’ambiance (couleurs personnalisables)",
      "Machine à fumée",
      "Micro sans fil pour discours",
      "Mix live durant la soirée",
      "Playlist personnalisée pour chaque moment",
      "Coordination avec le maître de cérémonie",
      "Installation et démontage inclus",
      "Déplacement inclus dans un rayon de 40 km",
      "Rencontre préalable pour définir l'ambiance musicale"
    ]
  },
  {
    id: 3,
    title: "Pack Anniversaire",
    description: "Une ambiance sur mesure pour vos fêtes d’anniversaire, avec jeux et animations.",
    price: "250 €",
    image: "assets/images/packs/anniversaire.jpg",
    includes: [
      "1 DJ animateur",
      "2 enceintes + caisson de basse",
      "Table de mixage",
      "Éclairage disco dynamique",
      "Animation micro (jeux, dédicaces, quiz)",
      "Playlist adaptée à l'âge du public",
      "Jeux musicaux pour enfants/adultes",
      "Installation et démontage inclus",
      "Cadeau surprise pour l'organisateur",
      "Micro sans fil",
      "Assistance technique sur place",
      "Déplacement inclus dans un rayon de 30 km"
    ]
  },
  {
    id: 4,
    title: "Pack Entreprise",
    description: "Idéal pour vos soirées d’entreprise ou team buildings, avec matériel professionnel.",
    price: "350 €",
    image: "assets/images/packs/entreprise.jpg",
    includes: [
      "1 DJ expérimenté",
      "Sonorisation adaptée aux grands espaces",
      "Éclairage professionnel et design",
      "Micro HF pour discours et animations",
      "Playlist corporate / ambiance lounge",
      "Diffusion sonore multi-zone possible",
      "Animation micro sur demande",
      "Branding sonore (jingles personnalisés)",
      "Installation et démontage inclus",
      "Câblage sécurisé (normes pro)",
      "Déplacement inclus dans un rayon de 50 km",
      "Support technique sur toute la durée de l'événement"
    ]
  }
];
}
