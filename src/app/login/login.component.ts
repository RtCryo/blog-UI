import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { $animations } from './login-animations';
import { $pages } from './login-pages';
import { $providers } from './login-providers';

export type loginAction = 'register'|'signIn'|'forgotPassword'|'changePassword'|'changeEmail'|'delete';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: $animations
})
export class LoginComponent implements OnInit {

  readonly providers = $providers;
  private pages = $pages;

  private page: loginAction;

  readonly form: FormGroup;
  private name: FormControl;
  private email: FormControl;
  private password: FormControl;
  private newEmail: FormControl;
  private newPassword: FormControl;

  public hidePassword = true;
  public error = "";
  public progress = false;

  constructor(@Inject(MAT_DIALOG_DATA) private action: loginAction) {
    this.name = new FormControl(null, Validators.required);
    this.email = new FormControl(null, [Validators.required, Validators.email]);
    this.password = new FormControl(null, Validators.required);
    this.newEmail = new FormControl(null, [Validators.required, Validators.email]);
    this.newPassword = new FormControl(null, Validators.required);

    this.form = new FormGroup({});

    this.switchPage(this.page = action);
   }

  ngOnInit(): void {
  }

  get currentPage() { return this.pages[this.page || 'signIn']; }

  private switchPage(page: loginAction) {

    // Removes all the controls from the form group
    Object.keys(this.form.controls).forEach( control => {
      this.form.removeControl(control);
    });
    
    // Add the relevant controls to the form according to selected page
    switch(this.page = page) {

      case 'register':
      this.form.addControl('name', this.name);
      this.form.addControl('email', this.email);
      this.form.addControl('password', this.password);
      break;

      default:
      case 'signIn':
      this.form.addControl('email', this.email);
      this.form.addControl('password', this.password);      
      break;

      case 'forgotPassword':
      this.form.addControl('email', this.email);
      break;
/*
      case 'resetPassword':
      this.form.addControl('newPassword', this.newPassword);
      break;
*/
      case 'changePassword':
      this.form.addControl('password', this.password);
      this.form.addControl('newPassword', this.newPassword);
      break;

      case 'changeEmail':
      this.form.addControl('password', this.password);
      this.form.addControl('newEmail', this.newEmail);
      break;

      case 'delete':
      this.form.addControl('password', this.password);      
      break;
    }
  }

  private showError(error: string) {

    this.error = error;
    this.progress = false;
    setTimeout(() => this.error = "", 5000);
  }

  public activate(action: loginAction) {

    this.progress = true;
    
    switch(action) {

      default:
      case 'signIn':
      this.signIn( this.email.value, this.password.value );
      break;

      case 'register':
      this.registerNew( this.email.value, this.password.value, this.name.value );
      break;

      case 'forgotPassword':
      this.forgotPassword( this.email.value );
      break;
/*
      case 'resetPassword':
      this.resetPassword( this.code, this.newPassword.value );
      break;
*/
      case 'changePassword':
      this.updatePassword( this.password.value, this.newPassword.value );
      break;

      case 'changeEmail':
      this.updateEmail( this.password.value, this.newEmail.value );
      break;

      case 'delete':
      this.deleteAccount( this.password.value );
      break;
    }
  }

  private registerNew(email: string, password: string, name: string) {
    // Registering a new user with a email/password
  }

  private signIn(email: string, password: string) {
    // Sign-in using email/password
  }

  private signInWith(provider: string) { 
    // Signing-in with a provider    
  }

  private forgotPassword(email: string) {
  }

    /*
    private resetPassword(code: string, newPassword: string) {
      
      this.auth.confirmPasswordReset(code, newPassword)
        //.then( () => this.reportSuccess('Reset to a new password', 'signIn') )
        // Dispays the error code, eventually
        .catch( error => this.showError(error.code) );
    }
  */

  private updateEmail(password: string, newEmail: string) {
    // Refreshes the authentication
  }

  private updatePassword(password: string, newPassword: string) {
    // Refreshes the authentication
  }

  private deleteAccount(password: string) {
    // Refreshes the authentication
  }

}
