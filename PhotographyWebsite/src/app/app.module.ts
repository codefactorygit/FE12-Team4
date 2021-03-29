import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooMediaComponent } from './foo-media/foo-media.component';

@NgModule({
  declarations: [
    AppComponent,
    TestimonialsComponent,
    FooMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
