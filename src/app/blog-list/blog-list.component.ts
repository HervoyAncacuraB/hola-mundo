import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {BlogNavComponent} from "../blog-nav/blog-nav.component";
import gsap from 'gsap';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    BlogNavComponent,
    RouterLink
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements AfterViewInit{

  @ViewChild('imageContainer1', { static: true }) imageContainer!: ElementRef;

  ngAfterViewInit() {

      this.imageContainer.nativeElement.addEventListener('mouseenter', () => {
        gsap.to(this.imageContainer.nativeElement, {scale: 1.05, duration: 0.3 });
      });

      this.imageContainer.nativeElement.addEventListener('mouseleave', () => {
        gsap.to(this.imageContainer.nativeElement, { scale: 1, duration: 0.3 });
      });
    }

}
