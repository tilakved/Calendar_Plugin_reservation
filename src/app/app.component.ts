import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendar-plugin';
  openCalendar: boolean = false;
  selectedDate: string | undefined;
  disabledates: any = ['2022-10-07','2022-10-14','2022-10-21','2022-10-28','2022-10-6'];

  open() {
    this.openCalendar = !this.openCalendar;
  }

  addDate(event: any) {
    this.selectedDate = event.selectedDate;

  }
}
