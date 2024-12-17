import { Component } from '@angular/core';
import {BlogNavComponent} from "../blog-nav/blog-nav.component";

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    BlogNavComponent
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {

}
