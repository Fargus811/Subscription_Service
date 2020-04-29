import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../services/validation.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  displayedInputName = 'Name';

  constructor(
    private fb: FormBuilder,
    private customValidator: ValidationService
  ) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
        password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
  }

  changeRegistrationType(type: boolean) {
    if (type) {
      this.displayedInputName = 'Company Name';
      document.querySelector('#option2').classList.add('active');
      document.querySelector('#option1').classList.remove('active');
    } else {
      this.displayedInputName = 'Name';
      document.querySelector('#option1').classList.add('active');
      document.querySelector('#option2').classList.remove('active');
    }
  }
}
