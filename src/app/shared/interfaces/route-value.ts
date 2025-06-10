/**
 * Representa el valor de una ruta del sistema
 *
 * @public
 */
export type RouteValue = {
    /**
     * Se utiliza para crear la ruta de Angular, es decir, se usa en el
     * `path` de la interface `Route`.
     */
    local: string

    /**
     * Se utiliza para guardar el valor completo y real de un ruta generada.
     * Le da una valor directo cuando quiere navegar entre rutas
     * usando `ActivatedRoute.navigate()` por ejemplo.
     */
    global: string
}
