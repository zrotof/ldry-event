import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./features/feature-home-container/feature-home-container.component').then(m => m.FeatureHomeContainerComponent)
    },
    {
        path: "a-propos",
        loadComponent: () => import('./features/feature-about-container/feature-about-container.component').then(m => m.FeatureAboutContainerComponent)
    },
    {
        path: "nos-equipements",
        loadComponent: () => import('./features/feature-products-container/feature-products-container.component').then(m => m.FeatureProductsContainerComponent)
    },
     {
        path: "nos-packs-evenementiels",
        loadComponent: () => import('./features/feature-event-packs-container/feature-event-packs-container.component').then(m => m.FeatureEventPacksContainerComponent)
    },
    {
        path: "devis-gratuit",
        loadComponent: () => import('./features/feature-estimate-container/feature-estimate-container.component').then(m => m.FeatureEstimateContainerComponent)
    }
];
