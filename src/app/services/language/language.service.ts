import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage!: any;
  currentFlag!: any;

  setLanguage(language: string, flag: string) {
    window.localStorage.setItem("language", language);
    this.currentFlag = flag;
  }

  getLanguage(): any {
    return localStorage.getItem('language');
  }

  getFlag(): string {
    this.currentLanguage = localStorage.getItem('language');
    if (this.currentLanguage == "EN") {
      this.currentFlag = "assets/images/flag/gb.png";
    } else if (this.currentLanguage == "FR") {
      this.currentFlag = "assets/images/flag/france.png";
    } else if (this.currentLanguage == "DE") {
      this.currentFlag = "assets/images/flag/germany.png";
    }
    return this.currentFlag;
  }
}
