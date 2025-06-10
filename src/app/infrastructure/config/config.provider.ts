import { ConfigRepository } from "@core/services/config/config.repository";
import { ConfigRepositoryService } from "@infrastructure/config/config.repository.service";

export const ConfigProvider = [
    {
        provide: ConfigRepository,
        useClass: ConfigRepositoryService,
    },
]
