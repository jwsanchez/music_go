import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  artists: any;
  localArtists: any;
  constructor(
    private musicService:MusicService,
    private modalController:ModalController
    ) {
    
  }
  ionViewDidEnter(){
    this.musicService.getArtists().then(listArtists => {
      this.artists = listArtists;
      console.log("", this.artists);
    })

   this.localArtists = this.musicService.getArtistsFromJson();
   this.localArtists = this.localArtists.artists;
     console.log(this.localArtists);
  }

  async showSongs(artist:any){
    console.log(artist);
    const songs = await this.musicService.getArtistsTracks(artist.id);
    console.log(songs);
  }
}


