import {Component, OnInit} from '@angular/core';
import {LocalstorageService} from '../../services/localstorage.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LogindetectorService} from '../../services/logindetector.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  private email: FormControl;
  private password: FormControl;


  constructor(
    private sessionstorage: LocalstorageService,
    private formBuilder: FormBuilder,
    private router: Router,
    private loginDetector: LogindetectorService,
    private httpClient: HttpClient
  ) {
    this.email = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit(): void {
  }

  authenticate(formData) {
    const auth = this.sessionstorage.authenticate(formData.email, formData.password);
    console.log(formData);
    console.log(formData.email);
    console.log(formData.password);
    if (auth) {
      localStorage.setItem('token', auth);
      this.loginDetector.announceLogin(formData.email);
      this.router.navigateByUrl('profile');
    } else {
      window.alert('Incorrect login or password!');
    }
  }
  login(){
    this.httpClient.get(`/api/login`, this.loginForm.value).subscribe(()=>{
      console.log("work");
    });

  }
}
