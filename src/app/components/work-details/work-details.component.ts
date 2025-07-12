import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Work } from 'src/app/models/Work';
import { WorkService } from 'src/app/services/work/work.service';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {
  currentWork: Work | null = null;
  safeVideoLink?: SafeResourceUrl;

  constructor(private workService: WorkService,
    private router: Router,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (this.workService.getWork() == null) {
      this.router.navigateByUrl("/work")
    }
    this.currentWork = this.workService.getWork();
    this.safeVideoLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentWork!.videoLink);
  }
  navigate() {
    this.workService.clearWork();
    this.router.navigateByUrl("/work")
  }
}
