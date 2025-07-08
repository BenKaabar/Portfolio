import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  isSidebarVisible: boolean = false;
  isDarkMode = false;
  currentLanguage!: string;
  currentFlag!: string;
  dropdownOpen = false;
  @ViewChild('dropdown', { static: true }) dropdownRef!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = this.dropdownRef?.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.dropdownOpen = false;
    }
  }
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
      this.languageService.setLanguage("en", "assets/images/flag/gb.png");
    }
    this.currentLanguage = this.languageService.getLanguage();
    this.currentFlag = this.languageService.getFlag();
    this.translate.use(this.currentLanguage);
    this.checkScreenSize();
  }
  toggleDropdown(event: MouseEvent) {
    event?.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }
  switchLanguage(language: string, flag: string, event: MouseEvent): void {
    event?.stopPropagation();
    this.translate.use(language);
    this.languageService.setLanguage(language, flag);
    this.currentFlag = this.languageService.getFlag();
    this.currentLanguage = this.languageService.getLanguage();
    this.dropdownOpen = false;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  checkScreenSize() {
    this.isNavbarCollapsed = window.innerWidth <= 575;
  }
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

}

