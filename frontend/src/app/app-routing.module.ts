import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {CatalogComponent} from './pages/catalog-page/catalog-page.component';
import {PartnershipPageComponent} from './pages/partnership-page/partnership-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegistrationPageComponent} from './pages/registration-page/registration-page.component';
import {PersonalPageComponent} from './pages/personal-page/personal-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'partnership', component: PartnershipPageComponent},
  {path: 'signin', component: LoginPageComponent},
  {path: 'signup', component: RegistrationPageComponent},
  {
    path: 'personal',
    children: [
      {path: 'profile', component: PersonalPageComponent},
      {path: 'mysubscriptions', component: PersonalPageComponent},
      {path: 'mywallet', component: PersonalPageComponent},
      {path: 'myservices', component: PersonalPageComponent},
      {path: 'control-panel', component: PersonalPageComponent}],
    component: PersonalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
