import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsMasterDetailsComponent } from './components/products-master-details/products-master-details.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'products-master-details', component: ProductsMasterDetailsComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
