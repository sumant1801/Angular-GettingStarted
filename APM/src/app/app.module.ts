import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { from } from 'rxjs';
// import { ConverToSpacesPipe } from './shared/convert-to-spaces.pipe';
// import { StarComponent } from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component'
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router'
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    // ProductListComponent,
    // ConverToSpacesPipe,
    // StarComponent,
    // ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component:WelcomeComponent},
      // {path: 'productlist', component:ProductListComponent},
      // {path: 'productlist/:id', component:ProductDetailComponent},
      {path:' ', redirectTo: 'welcome', pathMatch: 'full'},
      {path:'**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
