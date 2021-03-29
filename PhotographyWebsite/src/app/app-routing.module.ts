import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'customers', component: CustomersComponent
=======
import { BioAboutComponent } from './bio-about/bio-about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "portfolio", component:PortfolioComponent},
  {path: "bio-about", component:BioAboutComponent},
  {
    path: '', component: HomeComponent
>>>>>>> af1d65d6f9f3192e75bde975da428cd0b3e46d0b
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
