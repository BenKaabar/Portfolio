import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Work } from 'src/app/models/Work';
import { WorkService } from 'src/app/services/work/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  selectedWork: Work | null = null;
  page: number = 1;
  itemsPerPage: number = 1;
  startX = 0;
  endX = 0;
  constructor(private router: Router,
    private workService: WorkService) { }

  ngOnInit(): void {
    this.workService.clearWork();
  }

  //  ********************************************************************** All works **********************************************************************
  allWorks: Work[] = [
    {
      title: 'titlework1',
      shortDescription: 'Shortdescriptionwork1',
      longDescription: 'Longdescriptionwork1',
      videoLink: 'https://drive.google.com/file/d/11TxChZxhxnMdqzKbFAZyVZgu3jjCJH-_/preview',
      photoWork: 'assets/images/work/foodi.png',
      github: 'https://github.com/BenKaabar/Foodie',
      MainTechnology: 'Angular',
      AllTechnology: 'angular16, html5, css3, bootstrap5, typescript',
    },
    {
      title: 'titlework2',
      shortDescription: 'Shortdescriptionwork2',
      longDescription: 'Longdescriptionwork2',
      videoLink: 'https://drive.google.com/file/d/130-T4raMr7kVOrLaD04cpPqLi-Mpju-p/preview',
      photoWork: 'assets/images/work/RentNGo.png',
      github: 'https://github.com/BenKaabar/RentNGo',
      MainTechnology: 'Spring boot, Angular, MySQL',
      AllTechnology: 'Spring boot, angular16, html5, css3, bootstrap5, typescript, java, MySQL',
    },
    {
      title: 'titlework3',
      shortDescription: 'Shortdescriptionwork3',
      longDescription: 'Longdescriptionwork3',
      videoLink: 'https://drive.google.com/file/d/1gx5pwfkxd9G8XFoyvjTrW1QDgofQlqrn/preview',
      photoWork: 'assets/images/work/liveChat.png',
      github: 'https://github.com/BenKaabar/LiveChat',
      MainTechnology: 'Spring boot, Angular, Mongo DB, Web Socket',
      AllTechnology: 'Spring boot, angular16, html5, css3, bootstrap5, typescript, java, Mongo DB, Web Socket, ngx-emoji-mart',
    },
  ];
  //  ********************************************************************** Navigation to work detail **********************************************************************
  goToWorkDetail(work: Work): void {
    this.workService.setWork(work);
    this.router.navigateByUrl('/workDetail');
  }

  //  ********************************************************************** Pagination **********************************************************************
  get paginatedWorks(): Work[] {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.allWorks.slice(startIndex, endIndex);
  }
  get totalPages(): number {
    return Math.ceil(this.allWorks.length / this.itemsPerPage);
  }
  get isPreviousPageDisabled(): boolean {
    return this.page === 1;
  }
  get isNextPageDisabled(): boolean {
    return this.page === this.totalPages;
  }
  goToNextPage(): void {
    this.page++;
  }
  goToPreviousPage(): void {
    this.page--;
  }
  onTouchStart(event: TouchEvent): void {
    this.startX = event.touches[0].clientX;
  }
  onTouchEnd(event: TouchEvent): void {
    this.endX = event.changedTouches[0].clientX;
    if (this.startX - this.endX > 100) {
      if (this.page < this.totalPages) {
        this.goToNextPage();
      }
    } else if (this.endX - this.startX > 100) {
      if (this.page > 1) {
        this.goToPreviousPage();
      }
    }
  }
}
