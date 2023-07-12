import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder) { 
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

}
