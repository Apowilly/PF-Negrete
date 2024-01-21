import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitulos]'
})
export class TitulosDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log('appProperties directive');

   this.renderer.setStyle(this.element.nativeElement,'font-size','20px');

   this.renderer.setStyle(this.element.nativeElement,'margin','8px');

}
}
