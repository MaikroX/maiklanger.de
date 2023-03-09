import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  contactForm: FormGroup;

  constructor(public http: HttpClient) {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });
  }

  getErrorMessage() {
    if (this.contactForm.get('email').hasError('required')) {
      return 'Please enter your e-mail';
    }

    return this.contactForm.get('email').hasError('email')
      ? 'Not a valid email'
      : '';
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Formular ist gültig, sende E-Mail
      const formData = new FormData();
      formData.append('name', this.contactForm.get('name').value);
      formData.append('email', this.contactForm.get('email').value);
      formData.append('message', this.contactForm.get('message').value);

      this.http
        .post(
          'https://maik-langer.developerakademie.net/send_mail/send_mail.php',
          // 'https://web291.dogado.net/send_mail/send_mail.php',
          formData
        )
        .subscribe((response) => {
          console.log(response);
          this.contactForm.reset();
        });

      document.getElementById('emailSuccess').classList.remove('d-none');
    } else {
      // Formular ist ungültig, zeige Fehlermeldung an
      document.getElementById('warning').classList.remove('d-none');
    }
  }

  closeSuccess() {
    document.getElementById('emailSuccess').classList.add('d-none');
    window.location.reload();
  }
  closeWarning() {
    document.getElementById('warning').classList.add('d-none');
  }
}
