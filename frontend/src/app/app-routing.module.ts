import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PartnershipPageComponent } from './partnership-page/partnership-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent} from './registration-page/registration-page.component';
import { ProfilePageComponent} from './profile-page/profile-page.component';
import { MysubscriptionsPageComponent} from './mysubscriptions-page/mysubscriptions-page.component';
import { MywalletPageComponent} from './mywallet-page/mywallet-page.component';

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
