import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { FakestoreService } from 'src/app/services/fake-store.service';

@Component({
  selector: 'app-products-mater-details',
  templateUrl: './products-master-details.component.html',
  styleUrls: ['./products-master-details.component.scss']
})
export class ProductsMasterDetailsComponent implements OnInit {

  products$!: Observable<Product[]>;
  currentProduct!: Observable<Product>;

  constructor(private fakeStore: FakestoreService) { }

  ngOnInit(): void {
    this.products$ = this.fakeStore.getProducts();
  }

  selectProduct(id: number) : void {
    this.currentProduct = this.fakeStore.getProduct(id);
  }

}
