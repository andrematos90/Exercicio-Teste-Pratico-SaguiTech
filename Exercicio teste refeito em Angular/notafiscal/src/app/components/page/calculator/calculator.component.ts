import { Component } from '@angular/core';
import { NotafiscalService } from './../../../services/notafiscal.service';
import { NotaFiscalInterface } from './../../../interfaces/NotaFiscalInteface';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  nomeCliente: string = '';
  valorServico: number = 0;
  aliquota: number = 0;

  constructor(private notafiscalService: NotafiscalService) {}

  calcularNotaFiscal() {

    const notaFiscal: NotaFiscalInterface = {
      numeroNF : 0,
      cliente: this.nomeCliente,
      valorServico:this.valorServico,
      aliquotaDeImposto:this.aliquota,
      impostoCalculado:0,
      totalPagar:0
    };

    // Agora você pode enviar os dados para o serviço
    this.notafiscalService.processarNotaFiscal(notaFiscal);
  }
}

