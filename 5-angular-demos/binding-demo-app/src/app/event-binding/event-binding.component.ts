import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  count: number = 0
  picUrl: string = "images/pic1.jpg"
  increment(step: number=1){
    this.count += step
  }
  toggleImage(){
    if(this.picUrl.includes("pic1")){
      this.picUrl = "images/pic2.jpg"
    }else{
      this.picUrl = "images/pic1.jpg"
    }
  }
}
