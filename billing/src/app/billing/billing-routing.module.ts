import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing.component';
import { AddBillingComponent } from './add-billing/add-billing.component';

const routes: Routes = [
  {
    path: '',
    component: BillingComponent,
  },
  {
    path: 'add',
    component: AddBillingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillingRoutingModule {}
