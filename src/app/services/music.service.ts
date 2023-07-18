import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }


  getArtists(){
    return fetch("https://musicback.fly.dev/artists").then(
      response => response.json()
    );
  }
}

