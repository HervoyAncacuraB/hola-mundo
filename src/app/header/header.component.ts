import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faCodepen, faGithubAlt, faLinkedinIn, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import {faBookmark,faUser,faHome, faFileLines} from '@fortawesome/free-solid-svg-icons';
import {NgOptimizedImage} from "@angular/common";
import gsap from 'gsap';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, NgOptimizedImage, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{
  @ViewChild('linkedinIcon', { static: true }) linkedinIcon!: ElementRef;
  @ViewChild('githubIcon', { static: true }) githubIcon!: ElementRef;
  @ViewChild('stackoverflowIcon', { static: true }) stackoverflowIcon!: ElementRef;
  @ViewChild('codePenIcon', { static: true }) codePenIcon!: ElementRef;

  ngAfterViewInit(){

    const linkedin =this.linkedinIcon.nativeElement;
    const githubIcon =this.githubIcon.nativeElement;
    const stackoverflowIcon =this.stackoverflowIcon.nativeElement;
    const codePenIcon =this.codePenIcon.nativeElement;

    linkedin.addEventListener('mouseenter', () => {gsap.to(linkedin, {scale: 1.2, duration: 0.2 });});
    linkedin.addEventListener('mouseleave', () => {gsap.to(linkedin, { scale: 1, duration: 0.2 });});
    githubIcon.addEventListener('mouseenter', () => {gsap.to(githubIcon, {scale: 1.2, duration: 0.2 });});
    githubIcon.addEventListener('mouseleave', () => {gsap.to(githubIcon, { scale: 1, duration: 0.2 });});
    stackoverflowIcon.addEventListener('mouseenter', () => {gsap.to(stackoverflowIcon, {scale: 1.2, duration: 0.2 });});
    stackoverflowIcon.addEventListener('mouseleave', () => {gsap.to(stackoverflowIcon, { scale: 1, duration: 0.2 });});
    codePenIcon.addEventListener('mouseenter', () => {gsap.to(codePenIcon, {scale: 1.2, duration: 0.2 });});
    codePenIcon.addEventListener('mouseleave', () => {gsap.to(codePenIcon, { scale: 1, duration: 0.2 });});
  }

  faFileLinesIcon = faFileLines;
  faBookmarkIcon = faBookmark;
  faUserIcon = faUser;
  faHomeIcon = faHome;

  faLinkedinIn = faLinkedinIn;
  faGithubAlt = faGithubAlt;
  faStackOverflow = faStackOverflow;
  faCodepen = faCodepen;

  linkedinProfileUrl: string = 'https://www.linkedin.com/in/hervoya/';
  gitHubProfileUrl = 'https://github.com/HervoyAncacuraB';
  StackOverFlowProfileUrl = 'https://stackoverflow.com/users/6895553/jrvcio';
  codePenProfileUrl = 'https://codepen.io/Hervoy-Ancacura';
}
