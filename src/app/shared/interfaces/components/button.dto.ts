import { ButtonType } from '@shared/enums/button-type.enum'
import { IImg } from './img.dto'

export type IButton = {
    img: IImg | null
    text: string
    type: ButtonType
    disabled?: boolean
}
