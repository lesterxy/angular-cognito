import { Component } from '@angular/core';
import { CognitoService, IUser } from '../cognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: IUser;

  constructor(private router: Router, private cognitoService: CognitoService) {
    this.user = {} as IUser;
  }

  signIn (): void {
    this.cognitoService.signIn(this.user).then(() => {
      this.router.navigate(['/home'])
    }).catch(() => { 
      console.log("something bad happened on sign-in in log in component")
    })

    // console.log("username=", this.username, "password=", this.password )
    // if (this.username === 'admin' && this.password === 'bigfoot') {
    //   console.log ("login success");
    // } else { 
    //   console.log ("login failure");
    // }

  }
}
