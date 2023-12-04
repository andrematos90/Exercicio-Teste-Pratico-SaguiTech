import { Component } from '@angular/core';
import { NotafiscalService } from './../../../services/notafiscal.service';
import { NotaFiscalInterface } from './../../../interfaces/NotaFiscalInteface';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  cliente: string =  '';
  servico:number =  0;
  aliquota: number= 0;
  impostoCalculado:number =  0;
  totalPagar:number = 0


  constructor(private notafiscalService: NotafiscalService) {}

  calcularNotaFiscal() {

    const notaFiscal: NotaFiscalInterface = {
      numeroNF : 0,
      cliente: this.cliente,
      valorServico:this.servico,
      aliquotaDeImposto:this.aliquota,
      impostoCalculado:0,
      totalPagar:0,
    };

    // envia os dados para o service
    this.notafiscalService.processarNotaFiscal(notaFiscal);
  }
}

