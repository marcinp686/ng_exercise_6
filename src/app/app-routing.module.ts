import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsMasterDetailsComponent } from './components/products-master-details/products-master-details.component';
import { EmployeesMasterDetailsComponent } from './components/employees-master-details/employees-master-details.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'products-master-details', component: ProductsMasterDetailsComponent},
    {path: 'employees-master-details', component: EmployeesMasterDetailsComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
