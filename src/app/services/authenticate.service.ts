import { Injectable } from '@angular/core';
import {Storage } from '@ionic/storage-angular'
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

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

  registerUser(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
