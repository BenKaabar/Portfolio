import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeService } from 'src/app/services/resume/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  selectelement: string | null = null;
  constructor(private resumeService: ResumeService,
    private router: Router) { }
  ngOnInit(): void {
    if (this.resumeService.getResume() == "education") {
      this.router.navigateByUrl("/resume/education")
      this.resumeService.setResume("education")
      this.selectelement = this.resumeService.getResume();
    } else if (this.resumeService.getResume() == "experience") {
      this.router.navigateByUrl("/resume/experience")
      this.resumeService.setResume("experience")
      this.selectelement = this.resumeService.getResume();
    } else if (this.resumeService.getResume() == "skills") {
      this.router.navigateByUrl("/resume/skills")
      this.resumeService.setResume("skills")
      this.selectelement = this.resumeService.getResume();
    } else if (this.resumeService.getResume() == "aboutMe") {
      this.router.navigateByUrl("/resume/aboutMe")
      this.resumeService.setResume("aboutMe")
      this.selectelement = this.resumeService.getResume();
    }

  }
  selectElement(item: string) {
    this.resumeService.setResume(item)
    this.selectelement = this.resumeService.getResume();
  }
}