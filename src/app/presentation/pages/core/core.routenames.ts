import { AppRouteNames } from 'src/app/app.routenames'
import { RouteValue } from 'src/app/shared/interfaces/route-value'

type CoreRouteNames = {
    dashboard: RouteValue
}

export const CoreRouteNames: CoreRouteNames = {
    dashboard: {
        local: '',
        global: AppRouteNames.core + '/',
    },
}
