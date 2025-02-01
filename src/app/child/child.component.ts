import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  title = 'Angular_Demo1_Practice';
  @Input()  childCity:string="PUNE"
  

  childMsg : string = "Hello from child ...."

  @Output() eventChild = new EventEmitter();

  sendToParent()
  {
    this.eventChild.emit(this.childMsg);
    alert("Msg send to Parent ..... " +this.childMsg);
  }

}
