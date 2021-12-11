import {Component, OnInit, Self} from '@angular/core';
import {MyCompanyService} from "../my-company.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MyCompanyService]
})
export class UserComponent implements OnInit {

  constructor(@Self() private myCompanyService: MyCompanyService) { }

  ngOnInit(): void {
  }

}
