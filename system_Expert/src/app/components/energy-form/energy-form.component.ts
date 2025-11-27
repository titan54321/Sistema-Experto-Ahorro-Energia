import { Component } from '@angular/core';
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzCardModule } from "ng-zorro-antd/card";
import { RulesEngineService } from '../../services/rules-engine.service';
import { Router } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'app-energy-form',
  imports: [FormsModule,
  NzFormModule,
  NzInputModule,
  NzSelectModule,
  NzSwitchModule,
  NzButtonModule,
  NzCardModule,
  NzTagModule,
  NgIf],
  templateUrl: './energy-form.component.html',
  styleUrl: './energy-form.component.css'
})
export class EnergyFormComponent {

   form = {
    focos: '',
    aireAcondicionado: false,
    usoAire: 0,
    wattsTotales: 0,
    apagaLuces: true,
    refriViejo: false
  };

  constructor(
    private rules: RulesEngineService,
    private router: Router
  ) {}

  procesar() {
    const resultados = this.rules.getRecommendations(this.form);
    this.router.navigate(['/recomendaciones'], { state: { resultados } });
  }
}

