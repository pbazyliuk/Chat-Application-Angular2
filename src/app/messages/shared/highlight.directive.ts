import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
 
@Directive({
    selector: '[highlightByClick]'
})
export class HighlightByClickDirective {

    constructor(private _elementRef: ElementRef) {
        
    }

    @Output()
    public clickOutside = new EventEmitter();

    public highlight(color: string): void {
        this._elementRef.nativeElement.style.backgroundColor = color;
  	}


    @HostListener('document:click', ['$event.target'])
        public onClick(targetElement) {
           
            const clickedInside = this._elementRef.nativeElement.contains(targetElement);
            if (clickedInside) {
                (this._elementRef.nativeElement.style.backgroundColor === 'yellow') ?
                this.highlight('') : this.highlight('yellow');
            }
            else {
                 this.clickOutside.emit(null);
            }
        }
    }