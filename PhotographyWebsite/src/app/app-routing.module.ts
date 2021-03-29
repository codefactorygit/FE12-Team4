import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'customers', component: CustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
