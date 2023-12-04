import { NotaFiscalInterface } from './../interfaces/NotaFiscalInteface';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotafiscalService {

  processarNotaFiscal(notaFiscal: NotaFiscalInterface){

    console.log("Ola mundo! Funfou!")

     // calcular imposto
     var impostoCalculado = (notaFiscal.valorServico * (notaFiscal.aliquotaDeImposto / 100)).toFixed(2);

     // calcular total a pagar
     var totalPagar = (notaFiscal.valorServico + parseFloat(impostoCalculado)).toFixed(2)

     console.log(`Imposto Calculado: ${impostoCalculado}`);
     console.log(`Cliente ${notaFiscal.cliente}`)


  }
}
