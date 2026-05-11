import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isDarkMode = false;
  currentLanguage!: string;
  currentFlag!: string;
  dropdownOpen = false;
  isVisible = true;
  lastScrollTop = 0;
  @ViewChild('dropdown') dropdownRef!: ElementRef;

  constructor(private translate: TranslateService, private languageService: LanguageService) {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === null) {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      this.isDarkMode = storedDarkMode === 'true';
    }
    this.applyDarkMode();
  }

  ngOnInit() {
    if (this.languageService.getLanguage() == null || this.languageService.getLanguage() == undefined) {
      this.languageService.setLanguage("de", "assets/images/flag/germany.png");
    }
    this.currentLanguage = this.languageService.getLanguage();
    this.currentFlag = this.languageService.getFlag();
    this.translate.use(this.currentLanguage.toLocaleLowerCase());
  }

  // ********************************************************************** Dropdown **********************************************************************
  toggleDropdown(event: MouseEvent) {
    event?.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  // ********************************************************************** check language **********************************************************************
  switchLanguage(language: string, flag: string, event: MouseEvent): void {
    event?.stopPropagation();
    language = language;
    this.translate.use(language);
    this.languageService.setLanguage(language, flag);
    this.currentFlag = this.languageService.getFlag();
    this.currentLanguage = this.languageService.getLanguage();
    this.dropdownOpen = false;
  }

  // ********************************************************************** Dark Mode **********************************************************************
  applyDarkMode() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  // ********************************************************************** Window scroll **********************************************************************
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}

