import { Directive, ElementRef, HostListener, Input } from "@angular/core";


@Directive({
  selector: '[appHighlight]'
})

/* ElementRef grants direct access to the host DOM element through its native
element property. This ElementRef is put in the directive contructor to inject
a reference to host DOM element, the element to which you apply the directive*/
export class HighlightDirective {
  /* The Input decorator add metadata to the class that makes the directive
  appHighlight property available for binding
  The appHighlight attribute binding performs two tasks:
      - Applies the highlighting directive to the text element
      - Sets directive highlight color with the property binding */
  @Input() appHighlight = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  constructor(private element: ElementRef) {
    // element.nativeElement.style.backgroundColor = '#fabada';
    // element.nativeElement.style.cursor = 'pointer';
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}

/* Angular creates an instance of the appHighlight directive class and injects
it in the reference to the elements where it's used, into directive's constructor. */