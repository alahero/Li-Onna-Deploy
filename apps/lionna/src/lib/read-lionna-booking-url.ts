import 'server-only';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { cache } from 'react';

/**
 * Mismo módulo público que en el sitio en Framer (embed CoverManager) si no hay override en CMS.
 * Keystatic puede reemplazarlo vía `bookingUrl` en `content/reservations/index.yaml`.
 */
export const URL_MODULO_RESERVAS_COVAMANAGER_DEFECTO_LIONNA =
  'https://www.covermanager.com/reservation/module_restaurant/restaurante-li-onna/spanish';

/**
 * URL de reservas sin usar `createReader` en el root layout: evita cargar todo el
 * grafo de Keystatic en el bundle de layout (menos riesgo de módulos RSC rotos) y
 * mantiene la verdad con el CMS (mismo `index.yaml` que edita Keystatic).
 */
function analizarUrlDesdeContenidoYaml(cuerpo: string): string | null {
  for (const linea of cuerpo.split('\n')) {
    const t = linea.replace(/\s+$/, '');
    if (t === '' || /^\s*#/.test(t)) continue;
    if (!/^\s*bookingUrl:\s*/.test(t)) continue;
    const sinClave = t.replace(/^\s*bookingUrl:\s*/i, '');
    if (!sinClave.length) return null;
    const cita =
      (sinClave.startsWith('"') && sinClave.endsWith('"')) || (sinClave.startsWith("'") && sinClave.endsWith("'"));
    const valor = cita ? sinClave.slice(1, -1) : sinClave;
    if (!valor.trim() || valor === 'null') return null;
    if (!/^https?:\/\//i.test(valor)) return null;
    return valor;
  }
  return null;
}

export const leerUrlReservasLionna = cache((): string => {
  const ruta = path.join(process.cwd(), 'content/reservations/index.yaml');
  if (existsSync(ruta)) {
    const deYaml = analizarUrlDesdeContenidoYaml(readFileSync(ruta, 'utf8'));
    if (deYaml) return deYaml;
  }
  return URL_MODULO_RESERVAS_COVAMANAGER_DEFECTO_LIONNA;
});
