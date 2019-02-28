import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './Components/home-component/app.home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild([
        {
            path : '',
            component : HomeComponent
        }
        
    ])
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
