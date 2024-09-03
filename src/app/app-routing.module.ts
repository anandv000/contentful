import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './home/content/content.component';
import { AppComponent } from './app.component';
import { ValidationComponent } from './validation/validation.component';

const routes: Routes = [
  { path:'', component:HomeComponent, children:[
    { path:'home/content', component:ContentComponent }
  ]},
  { path:'validation', component:ValidationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
