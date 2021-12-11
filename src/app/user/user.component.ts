import {Component, OnInit, SkipSelf} from '@angular/core';
import {MyCompanyService} from "../my-company.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(@SkipSelf() private myCompanyService: MyCompanyService) { }

  ngOnInit(): void {
  }

}
