import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WorkComponent } from './components/work/work.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeComponent } from './components/resumeComponents/resume/resume.component';
import { AboutMeComponent } from './components/resumeComponents/about-me/about-me.component';
import { EducationComponent } from './components/resumeComponents/education/education.component';
import { ExperienceComponent } from './components/resumeComponents/experience/experience.component';
import { SkillsComponent } from './components/resumeComponents/skills/skills.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServiceComponent,
    ContactComponent,
    PageNotFoundComponent,
    WorkComponent,
    WorkDetailsComponent,
    ResumeComponent,
    AboutMeComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
