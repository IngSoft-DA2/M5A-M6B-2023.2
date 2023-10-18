import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { BasicComponentComponent } from './basic-component/basic-component.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondComponentComponent } from './second-component/second-component.component';

@NgModule({
  declarations: [AppComponent, BasicComponentComponent, SecondComponentComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
