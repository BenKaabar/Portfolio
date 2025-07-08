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

const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "Services", component: ServiceComponent },
  { path: "Contact", component: ContactComponent },
  { path: "Work", component: WorkComponent },
  { path: "WorkDetail", component: WorkDetailsComponent },
  {
    path: "Resume", component: ResumeComponent, children: [
      { path: "Experience", component: ExperienceComponent },
      { path: "Education", component: EducationComponent },
      { path: "Skills", component: SkillsComponent },
      { path: "AboutMe", component: AboutMeComponent },
      { path: '', redirectTo: '/Education', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
