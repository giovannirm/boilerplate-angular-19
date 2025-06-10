import { ApplicationConfig, /*inject, provideAppInitializer,*/ provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { InfrastructureProviders } from '@infrastructure/infrastructure';
// import { ConfigRepository } from '@infrastructure/repositories/config.repository';
import { routes } from './app.routes';

// function initializeApp(configRepository: ConfigRepository) {
//     return () => configRepository.getSecretKeys();
// }

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideAnimations(),
        ...InfrastructureProviders,
        // provideAppInitializer(initializeApp(inject(ConfigRepository)))
    ]
};
