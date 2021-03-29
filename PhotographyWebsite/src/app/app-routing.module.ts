import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioAboutComponent } from './bio-about/bio-about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "portfolio", component:PortfolioComponent},
  {path: "bio-about", component:BioAboutComponent},
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
