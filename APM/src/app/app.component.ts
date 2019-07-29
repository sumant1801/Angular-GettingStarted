import {Component} from "@angular/core";


@Component({
selector: 'app-root',
template: `
<nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
      <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/productlist']">Product List</a></li>
    </ul>
</nav>
<div class='container'>
  <router-outlet></router-outlet>
</div>
`
})
export class AppComponent{
  pageTitle: string = "This is Title, Acme managemenr";
}