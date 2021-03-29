import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  }
=======
import { BioAboutComponent } from './bio-about/bio-about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:"portfolio", component:PortfolioComponent},
  {path:"bio-about", component:BioAboutComponent},
>>>>>>> a9b1843e9e349dadc24789483b7df3a7624786ed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
