import { NgModule } from '@angular/core';
import { Toolbar } from './Components/tool-bar/toolbar.component';


@NgModule({
    declarations: [

        Toolbar
    ],
    exports: [
        Toolbar
    ]
    ,
    imports: [
    ],
    providers: [],
    bootstrap: []
})
export class ToolbarModule { }
