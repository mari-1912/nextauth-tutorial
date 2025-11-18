/**
 * un array de rutas que son publicas y no requieren autenticacion
 * @type {string[]}
 */

export const PublicRoutes = ['/'];

/**
 * array de rutas que se usan para autenticacion
 * estas rutas redirigiran a los usuarios logados a la pagina de configuracion/settings
 * @type {string[]}
 */

export const authRoutes = ['/auth/login', '/auth/register'];

/**
 * prefijo de las rutas de autenticacion de nextauth
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * ruta por defecto a la que se redirige despues del login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';