import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "notes",
    component: NoteListComponent,
  },
  {
    path: "notes/new",
    component: NoteFormComponent,
  },
  {
    path: "notes/:id/edit",
    component: NoteFormComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
