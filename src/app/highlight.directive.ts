import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // ElementRef: helps us to get a reference of the element on which the directive has been added
  constructor(private el: ElementRef) { }

  // on mouse hover/ enter
  // mouseover -  event we are targeting
  @HostListener("mouseover")
  public onMouseEnter() {
    console.log("Mouse over");
    // color will be changing to red
    this.el.nativeElement.style.color = "red";
  }


  // on mouse leave
  @HostListener("mouseleave") // function decorator
  public onMouseLeave() {
    console.log("Mouse left");
    // color will be reverted back to original color
    this.el.nativeElement.style.color = "black";

  }

}
