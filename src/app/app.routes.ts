import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.page').then(m => m.SearchPage)
  },
  {
    path: 'offer-details/:id',
    loadComponent: () => import('./pages/offer-details/offer-details.page').then(m => m.OfferDetailsPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.page').then(m => m.CartPage)
  },
  {
    path: 'booking',
    loadComponent: () => import('./pages/booking/booking.page').then(m => m.BookingPage)
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
    path: 'booking-history',
    loadComponent: () => import('./pages/booking-history/booking-history.page').then(m => m.BookingHistoryPage)
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
    path: 'destination-page',
    loadComponent: () => import('./pages/destination-page/destination-page.page').then( m => m.DestinationPagePage)
  },
];
