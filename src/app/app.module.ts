import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { TablaComponent } from './component/tabla/tabla.component';
import { NavComponent } from './component/nav/nav.component';
import { FormComponent } from './component/form/form.component';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    NavComponent,
    FormComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
