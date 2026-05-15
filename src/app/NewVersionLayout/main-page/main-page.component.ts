import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/services/work/work.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  havedetails: boolean = false;

  constructor(private workService: WorkService) { }

  ngOnInit(): void {

    this.workService.detailsWork$.subscribe((value) => {
      this.havedetails = value;
    });

  }
}
