import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
  selector: 'pm-productlist',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  //listFilter: string='cart';
  filteredProducts: IProduct[];

  _listfilter: string;
  get listFilter(): string {
    return this._listfilter;
  }

  set listFilter(value: string) {
    this._listfilter = value;
    this.filteredProducts = this._listfilter ? this.performFilter(this._listfilter) : this.products;
  }
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    
    //this.listFilter = 'cart';
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRateChange(incoming: string): void {
    this.pageTitle = incoming;
  }

  ngOnInit(): void {
    this.products = this.productService.getproducts();
    this.filteredProducts = this.products;
  }
  performFilter(filterStr: string): IProduct[] {
    
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterStr) !== -1);
    //throw new Error("Method not implemented.");
  }
}