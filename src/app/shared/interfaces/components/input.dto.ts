export type ILabel = {
    label: string
    name: string
    required: boolean
}

export type IInputValue = string | number[]

export type IInput = {
    name: string
    type: string
    value?: IInputValue
    placeholder: string
    clear?: boolean
    pipe?: {
        range?: boolean
    }
    directive?: {
        range?: boolean
    }
}

export type ILabelInput = {
    label: ILabel
    input: IInput
    error: boolean
    readonly: boolean
}
