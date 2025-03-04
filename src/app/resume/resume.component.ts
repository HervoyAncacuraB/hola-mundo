import {Component, ViewEncapsulation} from '@angular/core';
import {NgIf} from "@angular/common";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    NgIf,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  encapsulation: ViewEncapsulation.Emulated
})

export class ResumeComponent {
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
}
