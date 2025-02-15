import { Routes } from '@angular/router';

export const VIRTUAL_VIEW_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'basic-example',
    pathMatch: 'full',
  },
  {
    path: 'basic-example',
    loadComponent: () =>
      import('./virtual-view-demo.component').then(
        (m) => m.VirtualViewDemoComponent,
      ),
  },
  {
    path: 'cool-example',
    loadComponent: () =>
      import('./virtual-view-cool-demo.component').then(
        (m) => m.VirtualViewCoolDemoComponent,
      ),
  },
];
