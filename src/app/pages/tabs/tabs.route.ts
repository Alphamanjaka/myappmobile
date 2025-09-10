import { Routes } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../home/home.page').then(m => m.HomePage)
      },
      {
        path: 'cart',
        loadComponent: () => import('../cart/cart.page').then(m => m.CartPage)
      },
      {
        path: 'payment',
        loadComponent: () => import('../payment/payment.page').then(m => m.PaymentPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('../profile/profile.page').then(m => m.ProfilePage)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'offer',
        loadComponent: () => import('../offer/offer.page').then(m => m.OfferPage)
      },

      {
        path: 'offer-detail/:id',
        loadComponent: () => import('../offer-detail/offer-detail.page').then(m => m.OfferDetailPage)
      },
      {
        path: 'tabs',
        loadComponent: () => import('../tabs/tabs.page').then(m => m.TabsPage)
      },
      {
        path: 'search',
        loadComponent: () => import('../search/search.page').then(m => m.SearchPage)
      },
      {
        path: 'notifications',
        loadComponent: () => import('../notifications/notifications.page').then(m => m.NotificationsPage)
      },

    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  }
];
