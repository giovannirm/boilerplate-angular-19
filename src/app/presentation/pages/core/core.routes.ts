import { Routes } from '@angular/router'
import { LayoutCoreComponent } from '@presentation/layout/layout-core/layout-core.component'
import { DashboardComponent } from '@presentation/organisms/dashboard/dashboard.component'
import { CoreRouteNames } from './core.routenames'

export const routes: Routes = [
    {
        path: '',
        component: LayoutCoreComponent,
        children: [
            {
                path: CoreRouteNames.dashboard.local,
                component: DashboardComponent,
            },
        ],
    },
]
