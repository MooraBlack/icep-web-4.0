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
import { LoginComponent } from './login/login/login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ApplicationPageComponent } from './application-page/application-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserinforCardComponent } from './userinfor-card/userinfor-card.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReportComponent } from './dashboard/report/report.component';
import { ApplicantsComponent } from './dashboard/applicants/applicants.component';
import { NoticeBoardComponent } from './dashboard/notice-board/notice-board.component';
import { EmailFeedbackComponent } from './email-feedback/email-feedback.component';
import { RegstudComponent } from './dashboard/regstud/regstud.component';
import { UpdateNoticeComponent } from './dashboard/notice-board/update-notice/update-notice.component';
import { ViewNoticeComponent } from './dashboard/notice-board/view-notice/view-notice.component';
import { CreateNoticeComponent } from './dashboard/notice-board/create-notice/create-notice.component';
import { DeleteNoticeComponent } from './dashboard/notice-board/delete-notice/delete-notice.component';
import { UserComponent } from './dashboard/user/user.component';


const routes: Routes = [
  {path:  '' , redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'page-not-found', component: PageNotFoundComponent},//add page not found route
  {path: 'admin-login-page', component: AdminLoginPageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'main', component: MainComponent},
  {path: 'quote', component: QuoteComponent},
  {path: 'team', component: TeamComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'ad-service', component: AdServicesComponent},
  {path: 'footer', component: FooterComponent} ,
  {path: 'ad-posts', component: AdPostsComponent },
  {path: 'about-page', component: AboutPageComponent},
  {path: 'services-page', component: ServicesPageComponent},
  {path: 'contacts-page', component: ContactsPageComponent},
  {path: 'projects-page', component: ProjectsPageComponent},
  {path: 'login/login', component: LoginComponent},
  {path: 'register-page', component: RegisterPageComponent},
  {path: 'application-page', component: ApplicationPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'userinfor-card', component: UserinforCardComponent},
  {path: 'gallery', component: GalleryComponent},

  {path: 'dashboard/report', component: ReportComponent},
  {path: 'dashboard/applicants', component: ApplicantsComponent},
  {path: 'dashboard/notice-board', component: NoticeBoardComponent},
  {path: 'dashboard/notice-board/update-notice', component: UpdateNoticeComponent},//
  {path: 'dashboard/notice-board/view-notice', component: ViewNoticeComponent},//
  {path: 'dashboard/notice-board/create-notice', component: CreateNoticeComponent},//
  {path: 'dashboard/notice-board/delete-notice', component: DeleteNoticeComponent},//
  {path: 'email-feedbac', component: EmailFeedbackComponent},
  {path: 'dashboard/regstud', component: RegstudComponent},
  {path: 'dashboard/user', component: UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' // On Load Scroll to top | enabled | disabled on every Route click

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
