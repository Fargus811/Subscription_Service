import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './pages/catalog-page/catalog-page.component';
import { PartnershipPageComponent } from './pages/partnership-page/partnership-page.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalstorageService } from './services/localstorage.service';
import { MysubscriptionsPageComponent } from './pages/mysubscriptions-page/mysubscriptions-page.component';
import { MywalletPageComponent } from './pages/mywallet-page/mywallet-page.component';
import { CardFormComponent } from './components/card-form/card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    CatalogComponent,
    PartnershipPageComponent,
    FooterComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ProfilePageComponent,
    MysubscriptionsPageComponent,
    MywalletPageComponent,
    CardFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
