import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { CatalogComponent } from './pages/catalog-page/catalog-page.component';
import { PartnershipPageComponent } from './pages/partnership-page/partnership-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalstorageService } from './services/localstorage.service';
import { MysubscriptionsComponent } from './components/mysubscriptions/mysubscriptions.component';
import { MywalletComponent } from './components/mywallet/mywallet.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { PersonalPageComponent } from './pages/personal-page/personal-page.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';

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
    ProfileComponent,
    MysubscriptionsComponent,
    MywalletComponent,
    CardFormComponent,
    ProfileFormComponent,
    PersonalPageComponent,
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
