import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(public http: HttpClient) {}

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('message', this.formData.message);

    this.http
      .post(
        'https://maik-langer.developerakademie.net/send_mail/send_mail.php',
        // 'https://web291.dogado.net/send_mail/send_mail.php',
        formData
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
