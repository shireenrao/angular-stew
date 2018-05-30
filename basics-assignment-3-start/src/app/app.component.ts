import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText = true;
  arr_nums = [];
  start = 1;

  onClickToggleDisplay() {
    this.displayText = !this.displayText;
    this.arr_nums.push(this.start);
    this.start = this.start + 1;
  }

  getColor(num) {
    return num >= 5 ? 'blue' : 'white';
  }
}
