import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

//As classes don't work in ES5,I have replaced the class with the function below

/*class cred{

  constructor(
    public username:string,
    public pass:string
  ){

  }
}*/

const cred = function (username:string,pass:string){

}

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css']
})
export class LoginAuthComponent implements OnInit {
  

  constructor(private route:Router) {
     
   }

  ngOnInit(): void {

  }

  username1:string = 'mahip123';
  pass1:string = '123456';

  //userModel = new cred('','');
  userModel = Object.create(cred);

  login(){
    if(this.userModel.username == this.username1 && this.userModel.pass == this.pass1){
       alert('Login successful');
       this.route.navigate(['/loggedIn']);
    }
    else{
      alert('Login Failed! Please try again');
      this.userModel.username = '';
      this.userModel.pass = '';
    }
  }


}
