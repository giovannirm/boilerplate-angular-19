import { Component, ElementRef, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { CoreRouteNames } from '@presentation/pages/core/core.routenames'

type CurrentUser = {
    name: string
    document_number: string
    type: string
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.sass',
    imports: [],
})
export class HeaderComponent {
    @ViewChild('menubutton') menuButton!: ElementRef
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef
    @ViewChild('topbarmenu') menu!: ElementRef
    @ViewChild('menuProfile') menuProfile!: any


    constructor(private router: Router) { }


    openMenu($event: MouseEvent) {
        this.menuProfile.toggle($event)
    }

    goToDashboard() {
        this.router.navigateByUrl(CoreRouteNames.dashboard.global)
    }
}
