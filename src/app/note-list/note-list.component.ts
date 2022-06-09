import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  public notes : Note[] = [
    {
      id: 1,
      title: "hwdp",
      text: "rks huwdu"
    },
    {
      id: 2,
      title: "hwdp2",
      text: "rks huwdu2"
    }
  ]

  constructor(public noteService : NoteService) { }

  ngOnInit(): void {
  }

}
