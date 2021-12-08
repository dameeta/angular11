import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteoverviewComponent } from './quoteoverview/quoteoverview.component';

const routes: Routes = [{
    path: '',
    component: QuoteoverviewComponent
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }