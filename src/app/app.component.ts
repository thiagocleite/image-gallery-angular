import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ImageGallery } from './gallery-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public imgs: ImageGallery[] = [];

  public imgsSelected: number[] = [];

  public modalGallery: boolean = false;

  public modalImage: string = '';

  public showImgs: boolean = false;

  public pageSize = 15;

  public pagination = 1;

  public isFullListDisplayed: boolean = false;

  public modalImageIndex: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.onScrollDown();
  }

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

    let index = this.imgs.findIndex((x) => x.id == e.target.id);

    this.modalGallery = true;
    this.modalImage = this.imgs[index].img;
    this.modalImageIndex = index;
  }

  public onClickCloseModal(e: any) {
    this.modalGallery = false;
  }

  public onScrollDown() {
    if (!this.isFullListDisplayed) {
      this.http
        .get<ImageGallery[]>(
          `http://localhost:3000/imgs?_page=${this.pagination}&_limit=${this.pageSize}`
        )
        .subscribe({
          next: (result) => {
            this.imgs.push(...result);
            this.showImgs = true;
            this.pagination++;
            if (result.length < this.pageSize) {
              this.isFullListDisplayed = true;
            }
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }

  public onImageLoaded(e: any, last: boolean) {
    if (document.body.scrollHeight <= document.body.clientHeight) {
      if (last) {
        this.onScrollDown();
      }
    }
  }

  public onClickNextImage(e: any) {
    if (this.modalImageIndex == this.imgs.length - 1) return;

    this.modalImageIndex++;

    let el = document.getElementsByClassName("modal-image").item(0) as HTMLElement;

    el.style.opacity = "0";

    setTimeout(()=>{
      this.modalImage = this.imgs[this.modalImageIndex].img;
      el.style.opacity = "1";
    },300);
  }

  public onClickPrevImage(e: any) {
    if (this.modalImageIndex == 0) return;

    this.modalImageIndex--;

    let el = document.getElementsByClassName("modal-image").item(0) as HTMLElement;

    el.style.opacity = "0";

    setTimeout(()=>{
      this.modalImage = this.imgs[this.modalImageIndex].img;
      el.style.opacity = "1";
    },300);
  }

  private selectDeselectImage(data: any) {
    if (data.checked) {
      this.imgsSelected.push(data.id);
    } else {
      const index = this.imgsSelected.indexOf(data.id);
      this.imgsSelected.splice(index, 1);
    }
  }

  public log(e: any) {
    console.log(document.body.scrollHeight);
    console.log(document.body.clientHeight);
  }
}
