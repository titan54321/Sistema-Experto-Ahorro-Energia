import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RulesEngineService {

  getRecommendations(data: any): string[] {
    const r: string[] = [];

    if (data.focos === 'incandescentes') {
      r.push('Cambie los focos incandescentes por focos LED.');
    }

    if (data.aireAcondicionado && data.usoAire > 4) {
      r.push('Reduzca el uso del aire acondicionado o ajústelo a 24°C.');
    }

    if (data.wattsTotales > 2000) {
      r.push('Revise el consumo: se recomienda distribuir el uso de aparatos.');
    }

    if (!data.apagaLuces) {
      r.push('Apague las luces cuando no estén en uso.');
    }

    if (data.refriViejo) {
      r.push('Considere reemplazar el refrigerador por uno más eficiente.');
    }

    if (r.length === 0) {
      r.push('No se detectaron problemas. Buen trabajo.');
    }

    return r;
  }
}
