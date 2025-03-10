import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {BlogListComponent} from "./blog-list/blog-list.component";
import {BlogNavComponent} from "./blog-nav/blog-nav.component";
import {BlogPostComponent} from "./blog-post/blog-post.component";
import {CtaComponent} from "./cta/cta.component";
import {FooterComponent} from "./footer/footer.component";
import {PracticeComponent} from "./practice/practice.component";
import {ResumeComponent} from "./resume/resume.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'blogList', component: BlogListComponent },
  { path: 'blogNav', component: BlogNavComponent },
  { path: 'blogPost', component: BlogPostComponent },
  { path: 'cta', component: CtaComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '**', redirectTo: 'home'} // Esta línea es opcional, pero ayuda a redirigir rutas inexistentes a home
];
