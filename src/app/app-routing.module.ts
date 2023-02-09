import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/Login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'products-details/:id',
    loadChildren: () =>
      import(
        './components/products/products-details/products-details.module'
      ).then((m) => m.ProductsDetailsModule),
  },
  {
    path: 'follow-order/:id',
    loadChildren: () =>
      import('./components/order/follow-order/follow-order.module').then(
        (m) => m.FollowOrderModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
