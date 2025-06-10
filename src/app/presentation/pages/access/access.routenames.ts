import { RouteValue } from '@shared/interfaces/route-value'
import { AppRouteNames } from 'src/app/app.routenames'

export interface AccessRouteNamesType {
    login: RouteValue
}

export const AccessRouteNames: AccessRouteNamesType = {
    login: {
        local: 'login',
        global: AppRouteNames.access + '/login',
    },
}
