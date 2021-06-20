import { Component } from '@angular/core';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  // Src:string =`../../../../assets/images/1.jpg`;
  // count:any = 1;
  // x:any;
  // play(){
  //   this.x= setInterval( () => {
  //     if (this.count == 9){
  //       this.count = 1;
  //     }
  //     else{
  //       ++this.count;
  //     }


  //   this.Src = `assets/images/${this.count}.jpg`;
  //   } , 1000);

  // }

  // stop(){
  //   clearInterval(this.x);
  // }


//another soln
 Src:string =`../../../../assets/images/1.jpg`;
  sliderImages = document.getElementById("slider") as HTMLInputElement
  x: any;
  //images:Array<string> or string[] both method give same output
  images: string[] = [
    "../../../../assets/images/1.jpg",
    "../../../../assets/images/2.jpg",
    "../../../../assets/images/3.jpg",
    "../../../../assets/images/4.jpg",
    "../../../../assets/images/5.jpg",
    "../../../../assets/images/6.jpg",
    "../../../../assets/images/7.jpg",
    "../../../../assets/images/8.jpg",
  ];


  i = 0;
  play() {

    this.x = setInterval(() => {
     
      this.i++;
      console.log("1")
      if (this.i >= this.images.length) {
        this.i = 0;
      }
    this.Src =this.images[this.i]
      
    }
      , 1000);
  }
  stop() {
    clearInterval(this.x);
  }

}




// for (let i = 0 ; i >= this.images.length ; i++ ) {
//   i = 0;

// }





































