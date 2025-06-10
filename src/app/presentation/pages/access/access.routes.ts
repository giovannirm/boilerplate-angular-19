import { Routes } from '@angular/router'
import { LayoutAccessComponent } from '@presentation/layout/layout-access/layout-access.component'
import { AccessRouteNames } from './access.routenames'
import { LoginComponent } from './login/login.component'

export const routes: Routes = [
    {
        path: '',
        component: LayoutAccessComponent,
        children: [
            {
                path: AccessRouteNames.login.local,
                component: LoginComponent,
            },
            {
                path: '',
                redirectTo: AccessRouteNames.login.local,
                pathMatch: 'full',
            },
        ],
    },
]
