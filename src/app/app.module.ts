import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { FormComponent } from './form/form.component';
import { QuoteBoxComponent } from './quote-box/quote-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    FormComponent,
    QuoteBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


