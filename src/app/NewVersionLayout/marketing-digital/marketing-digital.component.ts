import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-marketing-digital',
  templateUrl: './marketing-digital.component.html',
  styleUrls: ['./marketing-digital.component.css']
})
export class MarketingDigitalComponent implements OnInit, AfterViewInit {
  selectedWork: any | null = null;
  page: number = 1;
  itemsPerPage: number = 4;
  startX = 0;
  endX = 0;
  isConsultModalOpen = false;
  selectedlist: any | null = null;
  @ViewChildren('animEl') elements!: QueryList<ElementRef>;

  lists: any[] = [
    {
      urlImage: "assets/images/markiting digital/ChapterOne.png"
    },
    {
      urlImage: "assets/images/markiting digital/RentNGo.png"
    },
    {
      urlImage: "assets/images/markiting digital/Profile LinkedIn.png"
    },
    {
      urlImage: "assets/images/markiting digital/liveChat.png"
    },
    {
      urlImage: "assets/images/markiting digital/club chess guellala.png"
    },
    {
      urlImage: "assets/images/markiting digital/foodi.png"
    },
  ]

  ngOnInit() {
    this.setGridColumns(window.innerWidth);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setGridColumns(event.target.innerWidth);
  }

  private setGridColumns(width: number) {
    this.itemsPerPage = width < 768 ? 2 : 4;
  }

  //  ********************************************************************** consulting **********************************************************************
  openConsultModal(list: any): void {
    this.selectedlist = list;
    this.isConsultModalOpen = true;
  }
  closeConsultModal(): void {
    this.isConsultModalOpen = false;
  }

  //  ********************************************************************** Pagination **********************************************************************
  get paginatedWorks(): any[] {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.lists.slice(startIndex, endIndex);
  }
  get totalPages(): number {
    return Math.ceil(this.lists.length / this.itemsPerPage);
  }
  get isPreviousPageDisabled(): boolean {
    return this.page === 1;
  }
  get isNextPageDisabled(): boolean {
    return this.page === this.totalPages;
  }
  goToNextPage(): void {
    if (!this.isNextPageDisabled) this.page++;
  }
  goToPreviousPage(): void {
    if (!this.isPreviousPageDisabled) this.page--;
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

  // ********************************************************************** Animation **********************************************************************
  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    this.elements.forEach((el) => {
      observer.observe(el.nativeElement);
    });
  }
}

