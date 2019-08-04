import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from '../shared/star.component';
import { ConverToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    //StarComponent,
    ConverToSpacesPipe,
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    // RouterModule,
    RouterModule.forChild([
             {path: 'productlist', component:ProductListComponent},
       {path: 'productlist/:id', 
       //canActivate:[ProductDetailGuard],
       component:ProductDetailComponent},
    ]),
    SharedModule
  ]
})
export class ProductModule { }
