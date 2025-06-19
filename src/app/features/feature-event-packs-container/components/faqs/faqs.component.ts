import { Component, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    AccordionModule
  ]
})
export class FaqsComponent {
  protected readonly tabs = [
    {
      question: "Est-ce que je peux personnaliser un pack ?",
      answer: "Oui, tous nos packs sont adaptables selon vos besoins. Vous pouvez ajouter ou retirer des options selon l’événement que vous organisez."
    },
    {
      question: "Quels types d’événements couvrez-vous ?",
      answer: "Nous intervenons pour des mariages, anniversaires, soirées privées, événements d'entreprise, galas, et plus encore."
    },
    {
      question: "Le DJ peut-il se déplacer en dehors de la ville ?",
      answer: "Oui, le DJ peut se déplacer dans toute la région. Des frais de déplacement peuvent s’appliquer au-delà d’un certain rayon."
    },
    {
      question: "Le matériel est-il fourni avec le pack ?",
      answer: "Absolument. Chaque pack inclut la sonorisation, les lumières, la table de mixage, et d'autres équipements selon la formule choisie."
    },
    {
      question: "Combien de temps à l’avance faut-il réserver ?",
      answer: "Nous vous conseillons de réserver au moins 2 à 4 semaines à l’avance, surtout en haute saison, pour garantir la disponibilité."
    },
    {
      question: "Y a-t-il un acompte à verser ?",
      answer: "Oui, un acompte de 30% est requis pour valider la réservation. Le solde est à régler le jour de l’événement."
    },
    {
      question: "Et si je dois annuler ou reporter l’événement ?",
      answer: "Vous pouvez reporter sans frais jusqu’à 7 jours avant la date prévue. En cas d’annulation, des conditions spécifiques s’appliquent selon le délai."
    }
  ];
}
