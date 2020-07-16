import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';


=======
import { Routes, RouterModule } from '@angular/router'; // leave this alone
import { FormsModule} from '@angular/forms';

>>>>>>> parent of 67b9e88... Revert "Ashoka"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { QuoteComponent } from './quote/quote.component';
import { AdPostsComponent } from './ad-posts/ad-posts.component';
import { TeamComponent } from './team/team.component';
import { AdServicesComponent } from './ad-services/ad-services.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ApplicationPageComponent } from './application-page/application-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { EmailFeedbackComponent } from './email-feedback/email-feedback.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './_component/alert/alert.component';


=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
>>>>>>> parent of 67b9e88... Revert "Ashoka"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    QuoteComponent,
    AdPostsComponent,
    TeamComponent,
    AdServicesComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    ServicesPageComponent,
    ContactsPageComponent,
    ProjectsPageComponent,
    LoginComponent,
    RegisterPageComponent,
    ApplicationPageComponent,
    DashboardComponent,
    GalleryComponent,
    AdminLoginPageComponent,
    EmailFeedbackComponent,
    AlertComponent,

     ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    BrowserAnimationsModule,
    MaterialModule,
>>>>>>> parent of 67b9e88... Revert "Ashoka"
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
