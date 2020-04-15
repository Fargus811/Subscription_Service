import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CatalogComponent } from './pages/catalog-page/catalog-page.component';
import { PartnershipPageComponent } from './pages/partnership-page/partnership-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent} from './pages/registration-page/registration-page.component';
import { ProfilePageComponent} from './pages/profile-page/profile-page.component';
import { MysubscriptionsPageComponent} from './pages/mysubscriptions-page/mysubscriptions-page.component';
import { MywalletPageComponent} from './pages/mywallet-page/mywallet-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'partnership', component: PartnershipPageComponent },
  { path: 'signin' , component: LoginPageComponent },
  { path: 'signup' , component: RegistrationPageComponent},
  { path: 'profile' , component: ProfilePageComponent},
  { path: 'mysubscriptions' , component : MysubscriptionsPageComponent},
  { path: 'mywallet', component : MywalletPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
