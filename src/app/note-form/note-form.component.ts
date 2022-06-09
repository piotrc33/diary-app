import { Component, OnInit, Input } from '@angular/core';
import { NoteListComponent } from '../note-list/note-list.component';
import { selectedNote } from '../global-variable';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  public selectedNote = selectedNote;
  @Input() note = new Note();

  constructor(public noteService : NoteService) { }

  ngOnInit(): void {
  }

}
