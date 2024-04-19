import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, RouterLink, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
// para conectar a una API debemos de:
//Crear el arhivo del servicio
//Importar el modulo siguiente
import  {provideHttpClient} from '@angular/common/http';
//Despues hay que mandarlo a llamar en providers.

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)), // provider de rutas
    provideHttpClient(), // provider de http, una vez habilitado hay que comenzar a trabajar con el servicio de http.
    
  ]
};
