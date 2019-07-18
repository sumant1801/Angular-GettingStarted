import {Component} from "@angular/core";


@Component({
selector: 'app-root',
template: `<div>
<h1>Title wil be printed here 
{{pageTitle}}</h1>
<pm-productlist></pm-productlist>
</div>
`
})
export class AppComponent{
  pageTitle: string = "This is Title, Acme managemenr";
}