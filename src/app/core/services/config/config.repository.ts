import { ConfigAggregate } from './config.aggregate';

export abstract class ConfigRepository {
    abstract getSecretKeys(): Promise<ConfigAggregate>
}
