import { animate, state, style, transition, trigger } from '@angular/animations'

export const expandCollapse = trigger('collapse', [
    state(
        'collapsed',
        style({
            height: '0',
            overflow: 'hidden',
        })
    ),
    state(
        'expanded',
        style({
            height: '*',
            overflow: 'hidden',
        })
    ),
    transition('collapsed <=> expanded', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
])
