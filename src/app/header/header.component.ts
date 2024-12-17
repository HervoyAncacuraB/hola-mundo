import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faLinkedinIn, faGithubAlt, faStackOverflow, faCodepen } from '@fortawesome/free-brands-svg-icons';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule,NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faXTwitter = faXTwitter;
  faLinkedinIn = faLinkedinIn;
  faGithubAlt = faGithubAlt;
  faStackOverflow = faStackOverflow;
  faCodepen = faCodepen;

  twitterProfileUrl = 'https://x.com/HervoyAncacuraB';
  linkedinProfileUrl: string = 'https://www.linkedin.com/in/hervoya/';
  gitHubProfileUrl = 'https://github.com/HervoyAncacuraB';
  StackOverFlowProfileUrl = 'https://stackoverflow.com/users/6895553/jrvcio';
  codePenProfileUrl = 'https://codepen.io/Hervoy-Ancacura';
}
