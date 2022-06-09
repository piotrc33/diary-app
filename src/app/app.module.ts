import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoteService } from './note.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NoteListComponent,
    NoteFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [NoteService], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
