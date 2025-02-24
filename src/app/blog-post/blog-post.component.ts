import { Component } from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  safeCode: SafeHtml;

  private readonly sanitizer: DomSanitizer;

  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
    // Código que quieres mostrar dentro del <code>
    const rawCode = `
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class=""\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}
export  $initHighlight;
    `;

    // Sanitizamos el código para evitar errores de seguridad
    this.safeCode = this.sanitizer.bypassSecurityTrustHtml(rawCode);
  }
}
