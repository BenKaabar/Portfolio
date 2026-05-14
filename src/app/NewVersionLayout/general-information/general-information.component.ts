import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit, AfterViewInit {
  currentLanguage!: string;
  @ViewChildren('animEl') elements!: QueryList<ElementRef>;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.checkLanguage();
  }

  // ********************************************************************** check language **********************************************************************
  checkLanguage() {
    this.currentLanguage = this.languageService.getLanguage();
  }

  // ********************************************************************** download CV **********************************************************************
  downloadCV() {
    this.checkLanguage();
    let fileName;
    if (this.currentLanguage === 'FR') {
      fileName = 'Curriculum Vitae ACHRAF BEN KAABAR.pdf';
    } else if (this.currentLanguage === 'EN') {
      fileName = 'Resume ACHRAF BEN KAABAR.pdf';
    } else {
      fileName = 'Lebenslauf ACHRAF BEN KAABAR.pdf';
    }
    let filePath = `assets/pdf/${fileName}`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
