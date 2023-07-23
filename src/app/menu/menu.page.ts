import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
  }

  tutorial(){
    this.navCtrl.navigateForward('/intro');
  }

  logout(){
    this.storage.set("isUserLoggedIn", false);
    this.navCtrl.navigateRoot('/login');
  }

  goToSettings(){
    this.navCtrl.navigateForward('/menu/settings');
    this.menu.close();
  }

}
