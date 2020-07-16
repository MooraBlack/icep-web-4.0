import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { MainComponent } from './main/main.component';
import { QuoteComponent } from './quote/quote.component';
import { AdPostsComponent } from './ad-posts/ad-posts.component';
import { TeamComponent } from './team/team.component';
import { AdServicesComponent } from './ad-services/ad-services.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ApplicationPageComponent } from './application-page/application-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EmailFeedbackComponent } from './email-feedback/email-feedback.component';


const routes: Routes = [
  {path:'',redirectTo:'home-page', pathMatch:'full'},
  {path:'admin-login-page', component: AdminLoginPageComponent},
  {path:'home-page', component: HomePageComponent},
  {path:'main', component: MainComponent},
  {path:'quote', component: QuoteComponent},
  {path:'team', component: TeamComponent},
  {path:'header', component: HeaderComponent},
  {path:'ad-service', component: AdServicesComponent},
  {path:'footer', component: FooterComponent},
  {path:'ad-posts', component: AdPostsComponent},
  {path:'about-page', component: AboutPageComponent},
  {path:'services-page', component: ServicesPageComponent},
  {path:'contacts-page', component: ContactsPageComponent},
  {path:'projects-page', component: ProjectsPageComponent},
  {path:'login-page', component: LoginPageComponent},
  {path:'register-page', component: RegisterPageComponent},
  {path:'application-page', component: ApplicationPageComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'email-feedbac', component: EmailFeedbackComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled' //Scroll to top on every Route click

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
