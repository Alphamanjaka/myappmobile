import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.page').then(m => m.CartPage)
  },
  {
    path: 'payment',
    loadComponent: () => import('./pages/payment/payment.page').then(m => m.PaymentPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'offer',
    loadComponent: () => import('./pages/offer/offer.page').then(m => m.OfferPage)
  },

  {
    path: 'offer-detail/:id',
    loadComponent: () => import('./pages/offer-detail/offer-detail.page').then(m => m.OfferDetailPage)
  },
];
