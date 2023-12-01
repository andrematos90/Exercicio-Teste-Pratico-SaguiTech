import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/page/calculator/calculator.component';
import { ResultComponent } from './components/page/result/result.component';

const routes: Routes = [
  {path: '', component: CalculatorComponent},
  {path: 'notafiscal', component: ResultComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
