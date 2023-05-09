import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './composants/mon-premier/mon-premier.component';
import { MonDeuxiemeComponent } from './composants/mon-deuxieme/mon-deuxieme.component';
import { SuperherosComponent } from './composants/superheros/superheros.component';
import {FormsModule} from "@angular/forms";
import { UnSeulSuperHerosComponent } from './composants/un-seul-super-heros/un-seul-super-heros.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    MonDeuxiemeComponent,
    SuperherosComponent,
    UnSeulSuperHerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
