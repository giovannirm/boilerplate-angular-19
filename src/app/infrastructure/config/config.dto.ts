import { HttpObjectResponse } from "@shared/contracts/response"
import { IBaseDTO } from "../base.dto"

export interface IConfigDTO extends IBaseDTO {
    storage_key: string
}

export type ConfigResponse = HttpObjectResponse<IConfigDTO>