import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component'
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselComponent,
    CarouselItemComponent,
  ],
  exports: [

    CarouselComponent,
    CarouselItemComponent,
  ]
})
export class SharedModule { }
