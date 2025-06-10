import { IConfig } from "./config.entity"

export interface IConfigAggregate {
    readonly config: IConfig
}

export class ConfigAggregate implements IConfigAggregate {
    public readonly config: IConfig

    constructor(config: IConfig) {
        this.config = config
    }
}