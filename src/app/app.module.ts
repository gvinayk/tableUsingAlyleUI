import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LyThemeModule, LY_THEME } from '@alyle/ui';
import { MinimaLight } from '@alyle/ui/themes/minima';
import { LyButtonModule } from '@alyle/ui/button';
import { LyCommonModule } from '@alyle/ui';
import { LyGridModule } from '@alyle/ui/grid';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LyThemeModule.setTheme('minima-light'),
    LyButtonModule,
    LyCommonModule,
    LyGridModule
  ],
  providers: [{ provide: LY_THEME, useClass: MinimaLight, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
