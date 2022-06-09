import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  public selectedNote : Note | null = null;

  constructor() { }

  getSelectedNote(){
    return this.selectedNote;
  }
  setSelectedNote(newNote : Note){
    this.selectedNote = newNote;
  }
}
