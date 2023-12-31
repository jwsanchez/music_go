import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

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
    private storage: Storage,
    private alertCtrl: AlertController
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
    this.authService.loginUser(credentials).then((res: any) => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.storage.set("user_id", res.id)
      this.navCtrl.navigateForward("/menu/home");
    }).catch(err => {
      this.errorMessage = err;
      this.presentAlert("Opps","Error de login", "Revisa tus credenciales");
    })
  }

  async presentAlert( header: string, subHeader: string, message: string){
    const alert = await this.alertCtrl.create({
      header: "Ups",
      subHeader: "Error de login",
      message: "Revisar credenciales",
      buttons: ['OK']
    });

    await alert.present();
  }

  goToRegister() {
    this.navCtrl.navigateForward("/register")
  }


}
