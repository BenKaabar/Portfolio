import { Injectable } from '@angular/core';
import { Work } from 'src/app/models/Work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private selectedwork: Work | null = null;

  setWork(work: Work) {
    this.selectedwork = work;
  }

  getWork(): Work | null {
    return this.selectedwork;
  }

  clearWork() {
    this.selectedwork = null;
  }
}
