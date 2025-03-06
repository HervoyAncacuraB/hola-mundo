import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgIf, NgFor} from "@angular/common";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from "@angular/material/button";
import { ResumeService } from '../services/resume.service';
import {faEnvelopeSquare, faFileLines, faGlobe, faMapMarkerAlt, faPhoneSquare, faDownload} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCodepen, faGithubAlt, faLinkedinIn, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import {MatIconModule} from "@angular/material/icon";
import gsap from "gsap";


@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatProgressSpinnerModule,
    MatButtonModule,
    FaIconComponent,
    MatIconModule
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  encapsulation: ViewEncapsulation.Emulated
})

export class ResumeComponent implements OnInit, AfterViewInit{

  @ViewChild('downloadPDFBtn', { static: true }) downloadPDFBtn!: ElementRef;

  ngAfterViewInit(){
    const download =this.downloadPDFBtn.nativeElement;

    download.addEventListener('mouseenter', () => {gsap.to(download, {scale: 1.035, duration: 0.3 });});
    download.addEventListener('mouseleave', () => {gsap.to(download, { scale: 1, duration: 0.3 });});
  }

  resumeData: any = null;
  isLoading = true;
  constructor(private readonly resumeService: ResumeService) {}

  ngOnInit() {
    this.resumeService.getResume().subscribe(data => {
      this.resumeData = data;
      this.isLoading = false;
    });
  }

  isGenerating = false;
  async generatePDF() {

    const { jsPDF } = await import('jspdf');
    const html2canvas = (await import('html2canvas')).default;

    const element = document.getElementById('resume-content');
    if (!element) {
      this.isGenerating = false;
      return;
    }

    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = 210;
      const pdfHeight = 297; // Full A4 height
      const margin = 10; // Define the margin size in mm
      const imgWidth = pdfWidth - 2 * margin; // Image width with lateral margins
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const usablePdfHeight = pdfHeight - 2 * margin; // Usable height with top and bottom margins
      let currentPage = 1; // Keep track of the current page number.

      let yPosition = 0; // Start at the top of the whole image

      while (yPosition < imgHeight) {
        const marginTop = currentPage === 1 ? 0 : margin; // Top margin (0 on first page)
        const currentY = marginTop; // The top of the image portion we are placing
        const marginBottom = currentPage === 1 ? margin : 0;

        pdf.addImage(
          imgData,
          'PNG',
          margin,
          currentY - yPosition, // Y-coordinate,
          imgWidth,
          imgHeight
        );
        if(currentPage === 1){
          yPosition += usablePdfHeight - marginBottom;//only in the first page we reduce the yPosition by the bottom margin.
        }else{
          yPosition += usablePdfHeight;// advance to the next page without reduce the bottom margin.
        }

        if (yPosition < imgHeight) {
          pdf.addPage();
          currentPage++;
        }
      }

      pdf.save('resume.pdf');
      this.isGenerating = false;
    });
  }

  protected readonly faPhoneSquareIcon = faDownload;
  protected readonly faPhoneSquare = faPhoneSquare;
  protected readonly faEnvelopeSquare = faEnvelopeSquare;
  protected readonly faGlobe = faGlobe;
  protected readonly faMapMarkerAlt = faMapMarkerAlt;
  protected readonly faFileLinesIcon = faFileLines;
  protected readonly faLinkedinIn = faLinkedinIn;
  protected readonly faGithubAlt = faGithubAlt;
  protected readonly faStackOverflow = faStackOverflow;
  protected readonly faCodepen = faCodepen;

  linkedinProfileUrl: string = 'https://www.linkedin.com/in/hervoya/';
  gitHubProfileUrl = 'https://github.com/HervoyAncacuraB';
  StackOverFlowProfileUrl = 'https://stackoverflow.com/users/6895553/jrvcio';
  codePenProfileUrl = 'https://codepen.io/Hervoy-Ancacura';

  protected readonly faDownload = faDownload;
}
