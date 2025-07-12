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
  @ViewChild('dropdown') dropdownRef!: ElementRef;
  @ViewChild('sidebarToggle') sidebarToggleRef!: ElementRef;

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
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = this.dropdownRef?.nativeElement.contains(event.target);
    const clickedSidebarToggle = this.sidebarToggleRef?.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.dropdownOpen = false;
    }
    if (this.isSidebarVisible && !clickedSidebarToggle) {
      this.isSidebarVisible = false;
    }
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



// @HostListener('document:click', ['$event'])
// onClickOutside(event: MouseEvent) {
//   const clickedInsideDropdown = this.dropdownRef?.nativeElement.contains(event.target);
//   const clickedInsideSidebar = this.sidebarRef?.nativeElement.contains(event.target);
//   console.log("clickedInsideSidebar " + clickedInsideSidebar)
//   console.log("clickedInsideDropdown " + clickedInsideDropdown)
//     console.log("isSidebarVisible " + this.isSidebarVisible)
//   // Si le clic est en dehors du dropdown → ferme dropdown
//   if (!clickedInsideDropdown) {
//     this.dropdownOpen = false;
//     console.log("---clickedInsideDropdown " + clickedInsideDropdown)
//   }

//   // Si le clic est en dehors de la sidebar ET qu’elle est ouverte → ferme sidebar
//   if (this.isSidebarVisible && !clickedInsideSidebar) {
//     this.isSidebarVisible = false;
//     console.log("---clickedInsideSidebar " + clickedInsideSidebar)
//   }
//     console.log("------- ")
// }

