import { DataSharingService } from 'src/app/services/data-sharing.service';
import { NotaFiscalInterface } from './../../../interfaces/NotaFiscalInteface';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnDestroy{
  notaFiscalData: NotaFiscalInterface | null = null;
  private subscription: Subscription;

  constructor(private dataSharingService: DataSharingService) {
    this.subscription = this.dataSharingService.getNotaFiscalData().subscribe(data => {
      this.notaFiscalData = data;
    });
  }

  //evita vazamentos de memóriav
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
