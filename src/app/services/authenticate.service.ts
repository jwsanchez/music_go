import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credentials: any){
    return new Promise((accept, reject) =>{
      if(
        credentials.email == "jesus@pca.edu.co" &&
        credentials.password == "1234567"
      )
      {
        accept("Login Exitoso")
      }else{
        reject("Verifique credenciales")
      }
     })
  }
}
