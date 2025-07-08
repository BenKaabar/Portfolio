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
    if (this.resumeService.getResume() == "Education") {
      this.router.navigateByUrl("/Resume/Education")
      this.resumeService.setResume("Education")
      this.selectelement = this.resumeService.getResume();
    } else if (this.resumeService.getResume() == "Experience") {
      this.router.navigateByUrl("/Resume/Experience")
      this.resumeService.setResume("Experience")
      this.selectelement = this.resumeService.getResume();
    } else if (this.resumeService.getResume() == "Skills") {
      this.router.navigateByUrl("/Resume/Skills")
      this.resumeService.setResume("Skills")
      this.selectelement = this.resumeService.getResume();
    } else if (this.resumeService.getResume() == "AboutMe") {
      this.router.navigateByUrl("/Resume/AboutMe")
      this.resumeService.setResume("AboutMe")
      this.selectelement = this.resumeService.getResume();
    }

  }
  selectElement(item: string) {
    this.resumeService.setResume(item)
    this.selectelement = this.resumeService.getResume();
  }
}