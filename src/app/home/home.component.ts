import {Component} from '@angular/core';
import {CtaComponent} from "../cta/cta.component";
import {BlogListComponent} from "../blog-list/blog-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CtaComponent,
    BlogListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
