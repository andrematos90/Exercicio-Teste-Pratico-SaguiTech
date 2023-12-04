import { NotaFiscalInterface } from './../interfaces/NotaFiscalInteface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private notaFiscalDataSubject = new BehaviorSubject<NotaFiscalInterface | null>(null);

  setNotaFiscalData(notaFiscalData: NotaFiscalInterface) {
    this.notaFiscalDataSubject.next(notaFiscalData);
  }

  getNotaFiscalData(): Observable<NotaFiscalInterface | null> {
    return this.notaFiscalDataSubject.asObservable();
  }
}
