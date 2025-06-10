import { NgClass } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { CoreRouteNames } from '@presentation/pages/core/core.routenames'
import { SidebarService } from '@presentation/shared/services/sidebar.service'
import { IImg } from '@shared/interfaces/components/img.dto'
import { MenuComponent } from '../menu/menu.component'

export interface Item {
    label: string
    img?: IImg
    routerLink?: string[]
    visible: boolean
    items?: Item[]
}

export interface ItemGroup {
    label: string
    items: Item[]
}

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.sass',
    imports: [NgClass, MenuComponent],
})
export class SidebarComponent implements OnInit {
    isSidebarVisible = true
    items: ItemGroup[] = []

    constructor(
        private sidebarService: SidebarService
    ) {
        this.items = [
            {
                label: '',
                items: [
                    {
                        label: 'Dashboard',
                        routerLink: [CoreRouteNames.dashboard.local],
                        visible: true,
                    },
                ],
            },
        ]
    }

    ngOnInit() {
        this.sidebarService.sidebarVisibility$.subscribe(isVisible => {
            this.isSidebarVisible = isVisible
        })
    }
}
