import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
// import { HomeComponent } from './home/home.component';
// import { NgxSoapModule } from 'ngx-soap';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
