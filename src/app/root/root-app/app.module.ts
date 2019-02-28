import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ToolbarModule} from '../../tool-bar/toolbar.module'
import { RootComponent } from './app.component';
import {routes} from '../routes'


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    ToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
