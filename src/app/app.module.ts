import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import {MyCompanyService} from "./my-company.service";

export function myCompanyServiceProvider(): MyCompanyService {
  return new MyCompanyService();
}

export const MYCOMPANY_SERVICE_TOKEN = new InjectionToken<MyCompanyService>('MYCOMPANY_SERVICE_TOKEN');

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: MyCompanyService, useClass: MyCompanyService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
