import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { AreaAttractionComponent } from './area-attraction/area-attraction.component';
import { DiningComponent } from './dining/dining.component';
import { BookingsComponent } from './bookings/bookings.component';
import { PayComponent } from './pay/pay.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RoomsComponent,
    RoomsBookingComponent,
    AreaAttractionComponent,
    DiningComponent,
    BookingsComponent,
    PayComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
