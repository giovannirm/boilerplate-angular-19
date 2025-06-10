import { NgIf } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { IImg } from '@shared/interfaces/components/img.dto'
import { Item, ItemGroup } from '../sidebar/sidebar.component'
import { expandCollapse } from './animation'

@Component({
    selector: '[app-menu-item]',
    standalone: true,
    templateUrl: './menu-item.component.html',
    styleUrl: './menu-item.component.sass',
    imports: [NgIf, RouterLink, RouterLinkActive],
    animations: [expandCollapse],
})
export class MenuItemComponent implements OnInit {
    @Input() data!: Item | ItemGroup
    isExpanded = true
    srcExpanded = '/assets/icons/sidebar/expand-more.svg'

    ngOnInit() {
        if (this.isItemCollapsed(this.data)) this.isExpanded = false
    }

    isItemGroup(data: Item | ItemGroup): data is ItemGroup {
        return (data as ItemGroup).items !== undefined
    }

    isItem(data: Item | ItemGroup): data is Item {
        return (data as Item).visible !== undefined
    }

    isItemCollapsed(data: Item | ItemGroup): boolean {
        return this.isItem(data) && (data as Item).items !== undefined
    }

    toggleExpand() {
        this.isExpanded = !this.isExpanded
        this.srcExpanded = this.isExpanded ? '/assets/icons/sidebar/expand-less.svg' : '/assets/icons/sidebar/expand-more.svg'
    }

    getImgSrc(img: IImg, isActive: boolean): string {
        const basePath = '/assets/icons/sidebar'
        return isActive ? `${basePath}/active/${img.src}.svg` : `${basePath}/${img.src}.svg`
    }
}
