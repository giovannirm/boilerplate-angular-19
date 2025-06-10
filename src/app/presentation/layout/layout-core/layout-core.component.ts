import { NgClass } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from '@presentation/organisms/header/header.component'
import { SidebarComponent } from '@presentation/organisms/sidebar/sidebar.component'
import { SidebarService } from '@presentation/shared/services/sidebar.service'
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-layout-core',
    templateUrl: './layout-core.component.html',
    styleUrl: './layout-core.component.sass',
    imports: [RouterOutlet, HeaderComponent, NgClass, SidebarComponent],
})
export class LayoutCoreComponent {
    private subscription!: Subscription
    public isSidebarVisible = false

    constructor(private readonly sidebarService: SidebarService) { }

    ngOnInit(): void {
        this.subscription = this.sidebarService.sidebarVisibility$.subscribe(isVisible => {
            this.isSidebarVisible = isVisible
        })
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe()
        }
    }

    toggleSidebar(): void {
        this.sidebarService.toggleSidebar()
    }
}
