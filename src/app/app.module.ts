import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { FormComponent } from './form/form.component';
import { QuoteBoxComponent } from './quote-box/quote-box.component';
import { HiglightDirective } from './higlight.directive';
import { TimeConsumePipe } from './time-consume.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    FormComponent,
    QuoteBoxComponent,
    HiglightDirective,
    TimeConsumePipe,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


