import { IBaseDTO } from "@infrastructure/base.dto"

export interface IBase {
    id: string
}

export abstract class BaseEntity implements IBase {
    public id: string

    constructor() {
        this.id = 'RANDOM WITH UUID'
    }

    public setEntityFromDTO(baseDTO: IBaseDTO): void {
        this.id = baseDTO.id
    }
}