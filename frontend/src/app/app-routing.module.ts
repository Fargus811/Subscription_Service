import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PartnershipPageComponent } from './partnership-page/partnership-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent} from './registration-page/registration-page.component';
import { ProfilePageComponent} from './profile-page/profile-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'partnership', component: PartnershipPageComponent },
  { path: 'signin' , component: LoginPageComponent },
  { path: 'signup' , component: RegistrationPageComponent},
  { path: 'profile' , component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
