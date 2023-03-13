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
    {
      id: 12,
      img: 'https://source.unsplash.com/VWcPlbHglYc',
    },
    {
      id: 13,
      img: 'https://source.unsplash.com/e6FMMambeO4',
    },
    {
      id: 14,
      img: 'https://source.unsplash.com/klCiPmzUw0Y',
    },
    {
      id: 15,
      img: 'https://source.unsplash.com/IdNOTjPeHrE',
    },
    {
      id: 16,
      img: 'https://source.unsplash.com/O0N9MF--hK4',
    },
    {
      id: 17,
      img: 'https://source.unsplash.com/FV3GConVSss',
    },
    {
      id: 18,
      img: 'https://source.unsplash.com/0ESjL-Nw22Y',
    },
    {
      id: 19,
      img: 'https://source.unsplash.com/KTVn62x6fFw',
    },
    {
      id: 20,
      img: 'https://source.unsplash.com/VSeVhmW4_JQ',
    },
    {
      id: 21,
      img: 'https://source.unsplash.com/07aFaTf24Kg',
    },
    {
      id: 22,
      img: 'https://source.unsplash.com/DqyYTM7pR2o',
    },
    {
      id: 23,
      img: 'https://source.unsplash.com/DqyYTM7pR2o',
    },
    {
      id: 24,
      img: 'https://source.unsplash.com/VWcPlbHglYc',
    },
    {
      id: 25,
      img: 'https://source.unsplash.com/e6FMMambeO4',
    },
    {
      id: 26,
      img: 'https://source.unsplash.com/klCiPmzUw0Y',
    },
    {
      id: 27,
      img: 'https://source.unsplash.com/IdNOTjPeHrE',
    },
    {
      id: 28,
      img: 'https://source.unsplash.com/O0N9MF--hK4',
    },
    {
      id: 29,
      img: 'https://source.unsplash.com/FV3GConVSss',
    },
    {
      id: 30,
      img: 'https://source.unsplash.com/0ESjL-Nw22Y',
    },
    {
      id: 31,
      img: 'https://source.unsplash.com/KTVn62x6fFw',
    },
    {
      id: 32,
      img: 'https://source.unsplash.com/VSeVhmW4_JQ',
    },
    {
      id: 33,
      img: 'https://source.unsplash.com/07aFaTf24Kg',
    },
    {
      id: 34,
      img: 'https://source.unsplash.com/DqyYTM7pR2o',
    },
  ];

  public imgsSelected: number[] = [];

  public modalGallery: boolean = false;

  public imageToLoad: string = '';


  private noOfItemsToShowInitially: number = 20;

  private imgsToLoad: number = 20;

  public imgsToShow = this.imgs.slice(0, this.noOfItemsToShowInitially);

  public isFullListDisplayed: boolean = false;


  constructor() {}

  ngOnInit(): void {}

  public onImgSelected(e: any) {
    this.selectDeselectImage(e.target);
  }

  public showImgsSelected(e: any) {
    alert(`Qtd de imgs selecionadas ${this.imgsSelected.length}`);
  }

  public onClickImg(e: any) {

    if (this.imgsSelected.length > 0) {

      const el = document.querySelector(`input[id="${e.target.id}"]`) as any;
      el.checked = !el.checked;
      this.selectDeselectImage(el);
      return;

    }

    let index = this.imgs.findIndex(x=>x.id == e.target.id);

    this.modalGallery = true;
    this.imageToLoad = this.imgs[index].img;
    console.log(e.target.id);
  }

  public onClickCloseModal(e: any) {
    this.modalGallery = false;
  }

  public onScrollDown()
  {
    if (this.noOfItemsToShowInitially <= this.imgs.length) {
      this.noOfItemsToShowInitially += this.imgsToLoad;
      this.imgsToShow = this.imgs.slice(0, this.noOfItemsToShowInitially);
      console.log("scrolled");
  } else {
      this.isFullListDisplayed = true;
  }
  }

  private selectDeselectImage(data:any)
  {
    if (data.checked) {
      this.imgsSelected.push(data.id);
    } else {
      const index = this.imgsSelected.indexOf(data.id);
      this.imgsSelected.splice(index, 1);
    }
  }
}
