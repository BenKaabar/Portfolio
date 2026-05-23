import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ServiceComponent } from './components/service/service.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';
import { WorkComponent } from './components/work/work.component';
import { ResumeComponent } from './components/resumeComponents/resume/resume.component';
import { AboutMeComponent } from './components/resumeComponents/about-me/about-me.component';
import { EducationComponent } from './components/resumeComponents/education/education.component';
import { ExperienceComponent } from './components/resumeComponents/experience/experience.component';
import { SkillsComponent } from './components/resumeComponents/skills/skills.component';
import { VideoeditingComponent } from './components/videoediting/videoediting.component';
import { MarkitingdigitalComponent } from './components/markitingdigital/markitingdigital.component';
import { MainPageComponent } from './NewVersionLayout/main-page/main-page.component';
import { MarketingDigitalComponent } from './NewVersionLayout/marketing-digital/marketing-digital.component';


const routes: Routes = [
  { path: "", component: MainPageComponent},
  { path: "home", component: HomeComponent },
  { path: "1", component: MarketingDigitalComponent },
  { path: "services", component: ServiceComponent },
  { path: "contact", component: ContactComponent },
  { path: "Markitingdigital", component: MarkitingdigitalComponent },
  { path: "Videoediting", component: VideoeditingComponent },
  { path: "web", component: WorkComponent },
  { path: "workDetail", component: WorkDetailsComponent },
  {
    path: "resume", component: ResumeComponent, children: [
      { path: "experience", component: ExperienceComponent },
      { path: "education", component: EducationComponent },
      { path: "skills", component: SkillsComponent },
      { path: "aboutMe", component: AboutMeComponent },
      { path: '', redirectTo: '/education', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
