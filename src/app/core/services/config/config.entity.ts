import { IConfigDTO } from "@infrastructure/config/config.dto"
import { BaseEntity, IBase } from "../base.entity"

export interface IConfig extends IBase {
    storageKey: string
}

export class ConfigEntity extends BaseEntity implements IConfig {
    public storageKey: string

    constructor() {
        super()
        this.storageKey = ''
    }

    public override setEntityFromDTO(config: IConfigDTO): void {
        this.storageKey = config.storage_key
    }
}