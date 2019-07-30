import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string;
  productName: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

  }

  onBack(): void {
    //console.log('back clicked');
    //console.log(this.router);
    this.router.navigate(['/productlist']);
    //this.router.navigate['/'];
  }

}
