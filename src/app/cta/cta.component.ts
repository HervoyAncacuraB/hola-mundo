import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { FormsModule} from '@angular/forms';
import gsap from 'gsap';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css'
})
export class CtaComponent implements AfterViewInit{
  @ViewChild('subscribeBtn', { static: true }) subscribeBtn!: ElementRef;

  ngAfterViewInit(){
    const subscribe =this.subscribeBtn.nativeElement;

    subscribe.addEventListener('mouseenter', () => {gsap.to(subscribe, {scale: 1.05, duration: 0.1 });});
    subscribe.addEventListener('mouseleave', () => {gsap.to(subscribe, { scale: 1, duration: 0.1 });});
  }
}

