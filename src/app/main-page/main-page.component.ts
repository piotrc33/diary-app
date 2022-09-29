import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public entries : number = 0;
  public notes : Note[] = [];
  public minDate : Date = new Date();
  public maxDate : Date = new Date();

  constructor(public noteService : NoteService) {  }

  async ngOnInit() {
    this.notes = await this.noteService.getNotes();
    this.minDate = new Date(this.notes[0].created_at);
    this.maxDate = new Date(this.notes[0].created_at);
    for(let note of this.notes) {
      let temp : Date = new Date(note.created_at);
      if(temp < this.minDate) this.minDate = temp;
      if(temp > this.maxDate) this.maxDate = temp;
    }
  }

}
