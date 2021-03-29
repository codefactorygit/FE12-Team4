import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioAboutComponent } from './bio-about/bio-about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'customers', component: CustomersComponent
  },  
  {
    path: "portfolio", component:PortfolioComponent
  },
  {
    path: "bio-about", component:BioAboutComponent
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
