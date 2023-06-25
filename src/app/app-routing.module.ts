import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AdventureComponent } from './adventure/adventure.component';
import { BookNowComponent } from './book-now/book-now.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  // login
  {
    path:'',component:ViewComponent
  },
  {
    path:'rooms',component:RoomsComponent
  },
  {
    path:'adventures',component:AdventureComponent
  },
  {
    path:'booknow',component:BookNowComponent
  },
  {
    path:'about',component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
