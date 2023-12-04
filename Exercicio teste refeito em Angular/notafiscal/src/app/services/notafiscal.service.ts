import { NotaFiscalInterface } from './../interfaces/NotaFiscalInteface';
import { Injectable } from '@angular/core';
import { DataSharingService } from './data-sharing.service';



@Injectable({
  providedIn: 'root'
})
export class NotafiscalService {

  constructor(private dataSharingService: DataSharingService) {}


  processarNotaFiscal(notaFiscal: NotaFiscalInterface){


     // calcular imposto

     const valorServico = Number(notaFiscal.valorServico)
     var impostoCalculado =  valorServico * (notaFiscal.aliquotaDeImposto / 100);
     console.log(typeof( notaFiscal.valorServico))

     // calcula total a pagar
     var totalPagar = valorServico + impostoCalculado;

     this.dataSharingService.setNotaFiscalData({
      numeroNF:notaFiscal.numeroNF,
      cliente: notaFiscal.cliente,
      valorServico: notaFiscal.valorServico,
      aliquotaDeImposto: notaFiscal.aliquotaDeImposto,
      impostoCalculado,
      totalPagar,
    });
  }
}
