import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, AfterViewInit {
  CreateContactform!: FormGroup;
  @ViewChildren('animEl') elements!: QueryList<ElementRef>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeCreateContactform();
  }

  // ********************************************************************** Create Employer **********************************************************************
  initializeCreateContactform(): void {
    this.CreateContactform = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ\\s]+$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ\\s]+$')]],
      phone: ['', [Validators.required, Validators.pattern('^[+0-9 ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      service: ['', [Validators.required]],
      message: ['']
    });
  }
  CreateContact(e: Event) {
    e.preventDefault();

    if (this.CreateContactform.valid) {
      const params = {
        from_name: this.CreateContactform.value.firstname + ' ' + this.CreateContactform.value.lastname,
        to_email: this.CreateContactform.value.email,
        message: this.CreateContactform.value.message,
        phone: this.CreateContactform.value.phone,
        service: this.CreateContactform.value.service
      };
      emailjs.send(
        'service_dcs3ttm',
        'template_wtdupap',
        params,
        '-hkTzVwI__nPhC9uK'
      ).then((result: EmailJSResponseStatus) => {
        this.CreateContactform.reset();
      }
      );

      emailjs.send(
        'service_dcs3ttm',
        'template_dpdqimp',
        params,
        '-hkTzVwI__nPhC9uK'
      ).then((result: EmailJSResponseStatus) => {
        this.CreateContactform.reset();
      }
      );

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

