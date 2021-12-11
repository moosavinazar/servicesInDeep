import {Component, Inject} from '@angular/core';
import {DEVICE_NAME_TOKEN} from "./app.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Inject(DEVICE_NAME_TOKEN) private deviceName: string) {
    console.log(deviceName);
  }

  title = 'servicesInDeep';
}
