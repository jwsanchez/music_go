import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  public progress = 0;
  slides = [
    {
      title: "Cancion 1",
      art: "Nombre de Artista",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente vel similique corrupti repellendus veniam ducimus inventore tempore quis iure laudantium nam magnam ullam praesentium culpa quas deleniti    asperiores ipsa.",
      img: "https://img.freepik.com/free-psd/club-dj-party-flyer-social-media-post_505751-3658.jpg?w=900&t=st=1688692730~exp=1688693330~hmac=d909b0d1421516c2a6ddde41164b45f2385b36bd03e974fe26d371ae7f45d116"
    },
    {
      title: "Cancion 2",
      art: "Nombre Artista",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente vel similique corrupti repellendus veniam ducimus inventore tempore quis iure laudantium nam magnam ullam praesentium culpa quas deleniti    asperiores ipsa.",
      img:"https://img.freepik.com/premium-psd/club-dj-party-flyer-social-media-post-premium_665615-4.jpg?w=900"
    },
    {
      title: "Cancion 3",
      art: "Nombre Artista",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente vel similique corrupti repellendus veniam ducimus inventore tempore quis iure laudantium nam magnam ullam praesentium culpa quas deleniti    asperiores ipsa.",
      img:"https://img.freepik.com/free-vector/illustration-music-application-icon_53876-35882.jpg?w=900&t=st=1688772340~exp=1688772940~hmac=2fb8c9c20e87d6f88babcdadbc4e76c654865569a0c778b5c737e2b0e5ca828c"
    },
    {
      title: "Cancion 4",
      art: "Nombre Artista",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente vel similique corrupti repellendus veniam ducimus inventore tempore quis iure laudantium nam magnam ullam praesentium culpa quas deleniti    asperiores ipsa.",
      img:"https://img.freepik.com/free-vector/headphone-with-music-notes-cartoon-vector-icon-illustration-music-technology-icon-concept-isolated_138676-7663.jpg?w=900&t=st=1688772848~exp=1688773448~hmac=2770f606f90110c5f2cd1e365e54bf563b76a1dc51fa8f540a9b337b6f355683"
    },
    {
      title: "Cancion 5",
      art: "Nombre Artista",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente vel similique corrupti repellendus veniam ducimus inventore tempore quis iure laudantium nam magnam ullam praesentium culpa quas deleniti    asperiores ipsa.",
      img:"https://img.freepik.com/free-psd/party-social-media-instagram-post-template_505751-3010.jpg?w=900&t=st=1688772976~exp=1688773576~hmac=765b239b4460263f9f4e530f82539b9b8b88efc27c8cb9472d05e51e62f93bcc"
    }
  ]
  constructor(private router: Router) { 
    setInterval(() => {
      this.progress += 0.001;
      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);

  }

  ngOnInit() {
  }

  finish(){
    this.router.navigateByUrl("/home")
  }

}
