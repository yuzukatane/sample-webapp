import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule }   from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './main/main.service';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
  ],
  imports: [
	BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
	NgbModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }