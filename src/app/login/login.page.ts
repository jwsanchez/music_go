import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      {type: "required", message: "El email es obligatorio"},
      {type: "email", message: "Email invalido"}
    ],
    password: [
      {type: "required", message: "Debe colocar una contraseña"},
      {type: "minlength", message: "Al menos debe contener 6 caracteres"}
    ]
  }
  errorMessage: string = '';
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
    ) { 
    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.email,
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$")
            ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(20)
            ]
          )
        )

      }
    )
  }

  ngOnInit() {
  }

  loginUser(credentials: any){
    console.log(credentials);
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateForward("/home");
    }).catch(err => {
      this.errorMessage = err;
      alert(this.errorMessage)
    })
  }

  goToRegister() {
    this.navCtrl.navigateForward("/register")
  }


}
