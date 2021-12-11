import { Component, OnInit } from '@angular/core';
import {MyCompanyService} from "../my-company.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [MyCompanyService]
})
export class UsersComponent implements OnInit {

  constructor(private myCompanyService: MyCompanyService) { }

  ngOnInit(): void {
  }

}
