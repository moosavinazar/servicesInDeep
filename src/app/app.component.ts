import {Component, Inject} from '@angular/core';
import {MyCompanyService} from "./my-company.service";
import {MYCOMPANY_SERVICE_TOKEN} from "./app.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private myCompanyService: MyCompanyService) {
  }

  title = 'servicesInDeep';
}
