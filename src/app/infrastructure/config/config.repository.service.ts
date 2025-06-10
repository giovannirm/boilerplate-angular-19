import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigAggregate } from '@core/services/config/config.aggregate';
import { ConfigEntity, IConfig } from '@core/services/config/config.entity';
import { ConfigRepository } from '@core/services/config/config.repository';
import { environment } from '@environmet/environment';
import { firstValueFrom, map } from 'rxjs';
import { ConfigResponse } from './config.dto';

@Injectable({ providedIn: 'root' })
export class ConfigRepositoryService extends ConfigRepository {
    private readonly backEndpoint = environment.backEndpoint || "http:localhost:3030/v1/api/health";

    constructor(private http: HttpClient) {
        super()
    }

    override async getSecretKeys(): Promise<ConfigAggregate> {
        const configAggregate = await firstValueFrom(
            this.http.get<ConfigResponse>(`${this.backEndpoint}/secret-keys`).pipe(
                map((configDTO: ConfigResponse) => {
                    const configEntity = new ConfigEntity()
                    configEntity.setEntityFromDTO(configDTO.data)
                    const config: IConfig = configEntity
                    return new ConfigAggregate(config)
                })
            ));
        return configAggregate;
    }
}
