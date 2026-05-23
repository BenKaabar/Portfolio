import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Work } from 'src/app/models/Work';
import { WorkService } from 'src/app/services/work/work.service';

@Component({
  selector: 'app-web-developement-details',
  templateUrl: './web-developement-details.component.html',
  styleUrls: ['./web-developement-details.component.css']
})
export class WebDevelopementDetailsComponent implements OnInit {
  currentWork: Work | null = null;
  safeVideoLink?: SafeResourceUrl;

  constructor(private workService: WorkService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.currentWork = this.workService.getWork();
    this.safeVideoLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentWork!.videoLink);
  }
  navigate() {
    this.workService.clearWork();
    this.workService.clearDetailsWork();
    this.workService.triggerScrollToWork();
  }
}
