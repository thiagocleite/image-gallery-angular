import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public imgs = [
    {
      id: 1,
      img: 'https://source.unsplash.com/VWcPlbHglYc',
    },
    {
      id: 2,
      img: 'https://source.unsplash.com/e6FMMambeO4',
    },
    {
      id: 3,
      img: 'https://source.unsplash.com/klCiPmzUw0Y',
    },
    {
      id: 4,
      img: 'https://source.unsplash.com/IdNOTjPeHrE',
    },
    {
      id: 5,
      img: 'https://source.unsplash.com/O0N9MF--hK4',
    },
    {
      id: 6,
      img: 'https://source.unsplash.com/FV3GConVSss',
    },
    {
      id: 7,
      img: 'https://source.unsplash.com/0ESjL-Nw22Y',
    },
    {
      id: 8,
      img: 'https://source.unsplash.com/KTVn62x6fFw',
    },
    {
      id: 9,
      img: 'https://source.unsplash.com/VSeVhmW4_JQ',
    },
    {
      id: 10,
      img: 'https://source.unsplash.com/07aFaTf24Kg',
    },
    {
      id: 11,
      img: 'https://source.unsplash.com/DqyYTM7pR2o',
    },
  ];

  public imgsSelected: number[] = [];

  public modalGallery: boolean = false;

  public imageToLoad: string = '';

  constructor() {}

  ngOnInit(): void {}

  public onImgSelected(e: any) {
    if (e.target.checked) {
      this.imgsSelected.push(e.target.id);
    } else {
      const index = this.imgsSelected.indexOf(e.target.id);
      this.imgsSelected.splice(index, 1);
    }
  }

  public showImgsSelected(e: any) {
    alert(`Qtd de imgs selecionadas ${this.imgsSelected.length}`);
  }

  public onClickImg(e: any) {
    if (this.imgsSelected.length > 0) {
      return;
    }

    let index = this.imgs.findIndex(x=>x.id == e.target.id);

    this.modalGallery = true;
    this.imageToLoad = this.imgs[index].img;
  }

  public onClickCloseModal(e: any) {
    this.modalGallery = false;
  }
}
