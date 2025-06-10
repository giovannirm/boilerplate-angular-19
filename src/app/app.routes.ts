import { Routes } from '@angular/router';
import { AppRouteNames } from './app.routenames';

export const routes: Routes = [
    {
        path: AppRouteNames.access,
        loadChildren: () => import('./presentation/pages/access/access.routes').then(m => m.routes),
    },
    {
        path: AppRouteNames.core,
        loadChildren: () => import('./presentation/pages/core/core.routes').then(m => m.routes),
    },
]
