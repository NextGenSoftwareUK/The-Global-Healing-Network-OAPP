import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: LocationStrategy, 
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
