/**
 * Función que permite esperar un determinado tiempo, usar para pruebas.
 * @param ms Milisegundos que durará la función.
 */
export function sleep(ms: number = 1500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
