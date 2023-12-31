import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import * as _ from 'lodash';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {

  productList: any;
  ascProductList: any;
  selectedCategory: any;

  constructor(private productService: ProductsService,  private spinner : NgxSpinnerService)
  {
    this.getAllProducts();
  }

  ngOnInit() {
  }


  getAllProducts() {
    this.spinner.show();
    try {

      this.productService.getAttachmentProducts().then((res: any) => {
        let data = res.records.rows;
        console.log(res.rows);
        this.productList = data.map((obj: any) => obj.doc);
        console.log('productList', data);
        this.ascProductList = _.orderBy(this.productList, ['category'], ['asc']);
        console.log('Ascending Product List :', this.ascProductList);
        this.spinner.hide();
      });

    } catch (err) {
      console.error("error", err);
      this.spinner.hide();
    }
  }

  removeProduct(id: any, rev: any) {

    try {
      console.log('id', id);
    console.log('rev', rev);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result: any) => {
      if (result.value) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');

        this.productService.removeProducts(id, rev).then(
          (res) => {

            console.log('remove products result', res);
            // document.location.reload();
            this.getAllProducts();
          },
          (err) => {
            console.log('err Message', err);
          }
        );
      }
    });

    } catch (err) {
      console.error("error", err);
    }
  }


}
