import { Component, Input } from '@angular/core'
import { MenuItemComponent } from '../menu-item/menu-item.component'
import { ItemGroup } from '../sidebar/sidebar.component'

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.sass',
    imports: [MenuItemComponent],
})
export class MenuComponent {
    @Input() items: ItemGroup[] = []
}
