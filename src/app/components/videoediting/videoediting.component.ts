import { Component, HostListener, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videoediting',
  templateUrl: './videoediting.component.html',
  styleUrls: ['./videoediting.component.css']
})
export class VideoeditingComponent {
  page: number = 1;
  itemsPerPage: number = 1;
  startX = 0;
  endX = 0;
  lists: { safeVideoLink: SafeResourceUrl }[] = [];

  constructor(private sanitizer: DomSanitizer) {
    const videoLinks = [
      'https://drive.google.com/file/d/1UiOaB40a-ivm2UiB4NLPUFOQFHH1FDBn/preview',
      'https://drive.google.com/file/d/1gx5pwfkxd9G8XFoyvjTrW1QDgofQlqrn/preview',
      'https://drive.google.com/file/d/130-T4raMr7kVOrLaD04cpPqLi-Mpju-p/preview',
      'https://drive.google.com/file/d/11TxChZxhxnMdqzKbFAZyVZgu3jjCJH-_/preview',
      'https://drive.google.com/file/d/1kwv1LCJ5IKBForSkpaxp1gehiGVPARBh/preview',
      'https://drive.google.com/file/d/1Zsa-nPRXg-2vbVeCfrVyiQbaoQwYP_i9/preview'
    ];
    this.lists = videoLinks.map(link => ({
      safeVideoLink: this.sanitizer.bypassSecurityTrustResourceUrl(link)
    }));
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
}
