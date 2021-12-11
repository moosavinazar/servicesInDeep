import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

export const USER_AGENT = new InjectionToken<string>('USER_AGENT');
export const SCREEN_WIDTH = new InjectionToken<string>('SCREEN_WIDTH');
export const SCREEN_HEIGHT = new InjectionToken<string>('SCREEN_HEIGHT');

export function deviceNameProvider(userAgent: string, screenWidth: string, screenHeight: string): string {
  // logic goes here
  return userAgent + ' ' + screenWidth + ' ' + screenHeight;
}

export const DEVICE_NAME_TOKEN = new InjectionToken<string>('DEVICE_NAME_TOKEN');

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
    { provide: USER_AGENT, useValue: window.navigator.userAgent },
    { provide: SCREEN_WIDTH, useValue: window.screen.width },
    { provide: SCREEN_HEIGHT, useValue: window.screen.height },
    {
      provide: DEVICE_NAME_TOKEN,
      useFactory: deviceNameProvider,
      deps: [
        USER_AGENT,
        SCREEN_WIDTH,
        SCREEN_HEIGHT
      ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
