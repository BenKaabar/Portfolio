import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private selectedResume: string = "Education";

  setResume(name: string) {
    this.selectedResume = name;
  }

  getResume(): string | "" {
    return this.selectedResume;
  }

  clearResume() {
    this.selectedResume = "";
  }
}
