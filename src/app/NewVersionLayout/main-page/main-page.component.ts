import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WorkService } from 'src/app/services/work/work.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  havedetails = false;

  @ViewChild('detailsSection')
  detailsSection!: ElementRef;
  @ViewChild('workSection')
  workSection!: ElementRef;
  constructor(private workService: WorkService) { }

  ngOnInit(): void {

    this.workService.detailsWork$
      .subscribe((value) => {

        this.havedetails = value;

        if (value) {

          setTimeout(() => {

            this.detailsSection.nativeElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });

          }, 100);

        }

      });
      
    this.workService.scrollToWork$
      .subscribe((value) => {

        if (value) {

          setTimeout(() => {

            this.workSection.nativeElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });

          }, 100);

        }

      });

  }
}