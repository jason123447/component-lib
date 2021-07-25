import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit, AfterViewInit {

  // @HostBinding('style') baseStyle: SafeStyle;
  @ViewChild('carouselItemWrapper') wrapper: ElementRef;
  elWidth: number = 0;
  elHeight: number = 0;

  constructor(
    public el: ElementRef,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void { }



  ngAfterViewInit(): void {
    console.log(this.child, this.child.clientWidth);
    // this.child as Image
    (this.child as HTMLImageElement).onload = (res) => {
      this.setOffset
    }
  }

  get child(): Element {
    const children: HTMLCollection = this.wrapper.nativeElement.children;
    if (children.length > 1 || !children.length) console.error(`assert error: "carousel-item" component children element should be 1, but get ${children.length}`);
    return children && children[0];
  }

  setOffset() {
    this.elWidth = this.child.clientWidth;
    this.elHeight = this.child.clientHeight;
  }

}
