import { AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ContentChildren(CarouselItemComponent, { descendants: true }) carouselItems: QueryList<CarouselItemComponent>;
  @ViewChildren(CarouselItemComponent) vc: any;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('carouselItems', this.carouselItems);
    this.carouselItems.toArray().map(e => {
      console.log(e.el.nativeElement)
      return {
        
      }
    })
    console.log('vc', this.vc);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("after view init");

  }

}
