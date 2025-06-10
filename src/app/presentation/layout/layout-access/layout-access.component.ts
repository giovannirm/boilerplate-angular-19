import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-layout-access',
    standalone: true,
    templateUrl: './layout-access.component.html',
    styleUrl: './layout-access.component.sass',
    imports: [RouterOutlet],
})
export class LayoutAccessComponent { }
