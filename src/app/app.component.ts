import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {CtaComponent} from "./cta/cta.component";
import {BlogListComponent} from "./blog-list/blog-list.component";
import {FooterComponent} from "./footer/footer.component";
import {BlogNavComponent} from "./blog-nav/blog-nav.component";
import {BlogPostComponent} from "./blog-post/blog-post.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, CtaComponent, BlogListComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo from app component application';
}
