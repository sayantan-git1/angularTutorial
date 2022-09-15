import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  userData = {
    email: "test@test.com",
    password: "test123",
    address: "Noida Sector 126"
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(3), Validators.maxLength(16), Validators.required]),
    address: new FormControl('', [Validators.minLength(5), Validators.pattern('[A-z0-9 ]*'), Validators.required])
  })

  onSubmitTemplate(formData: any) {
    console.warn(formData)
    this.userData = formData
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  get address() {
    return this.loginForm.get('address')
  }

  onSubmitReactive() {
    console.warn(this.loginForm.value)
  }

}
