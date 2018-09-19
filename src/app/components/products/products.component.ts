import { Component, OnInit } from '@angular/core';
import { ProductsServiceService} from "../../services/products-service.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private ps: ProductsServiceService) { }

  ngOnInit() {
    this.ps.getProducts().subscribe(products => {
      console.log(products);
    })
  }

}
