import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooMediaComponent } from './foo-media/foo-media.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomersComponent } from './customers/customers.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BioAboutComponent } from './bio-about/bio-about.component';

@NgModule({
  declarations: [
    AppComponent,
    TestimonialsComponent,
    FooMediaComponent,
    ContactUsComponent,
    CustomersComponent,
    PortfolioComponent,
    BioAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
