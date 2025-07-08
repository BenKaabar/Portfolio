import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentLanguage!: string;

  constructor(private languageService: LanguageService,
    private router: Router
  ) { }

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
    console.log("home " + this.currentLanguage)
    let fileName = this.currentLanguage === 'fr' ? 'CV FR ACHRAF BEN KAABAR.pdf' : 'CV EN ACHRAF BEN KAABAR.pdf';
    let filePath = `assets/pdf/${fileName}`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  navi() {
    this.router.navigateByUrl("/Login")
  }
}
