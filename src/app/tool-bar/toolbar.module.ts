import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
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
        MatToolbarModule,
        FlexLayoutModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: []
})
export class ToolbarModule {

    constructor(){
        console.log("Toolbar Module a asche");
    }
 }
