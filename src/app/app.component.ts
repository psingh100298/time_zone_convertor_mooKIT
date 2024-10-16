import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import moment from 'moment';
// import 'moment-timezone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'time_zone_conversion';
  // todayDate = new Date();
  // result:any;
  // constructor(){
  //   this.result = moment();
  //     this.result.tz('Australia/Sydney').format('ha z');  

    // moment().tz("America/Los_Angeles").format();

  // }
  // getFormattedDate() {
  //   // moment.locale('America/New_York');
  //     this.result = moment();
  //     this.result.tz('Australia/Sydney').format('ha z');  
  //   console.log(this.todayDate);
  // }
   date =  Date.now();
// Results below assume UTC timezone - your results may vary

// Specify default date formatting for language (locale)
// console.log(new Intl.DateTimeFormat('en-US').format(date));
// Expected output: "12/20/2020"

// Specify default date formatting for language with a fallback language (in this case Indonesian)
// console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
// Expected output: "20/12/2020"

// Specify date and time format using "style" options (i.e. full, long, medium, short)

  convertedDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'Asia/Tokyo',
  }).format(this.date);
// Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT+11"

}
