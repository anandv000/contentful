import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './home/content/content.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'', component:HomeComponent, children:[
    { path:'home/content', component:ContentComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
