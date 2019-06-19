import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { AreaAttractionComponent } from './area-attraction/area-attraction.component';
import { DiningComponent } from './dining/dining.component';
import { BookingsComponent } from './bookings/bookings.component';
import { PayComponent } from './pay/pay.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path: 'RoomPage', component:RoomsComponent},
  {path: 'rooms-booking', component:RoomsBookingComponent},
  {path: 'area-attraction', component:AreaAttractionComponent},
  {path: 'dining', component:DiningComponent},
  {path:'bookings', component:BookingsComponent},
  {path: 'pay', component:PayComponent},
  {path: 'photos', component:PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
