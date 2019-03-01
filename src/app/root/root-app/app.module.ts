import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ToolbarModule} from '../../tool-bar/toolbar.module'
import { RootComponent } from './app.component';
// import {AppRouteModule} from '../routes.module';
import {RouterModule} from '@angular/router';
import {routes} from '../routes.module'

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    ToolbarModule,
    RouterModule.forRoot(routes)
],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
