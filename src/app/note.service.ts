import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Note } from './note';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  public selectedNote: Note | null = null;

  private notesUrl = 'http://localhost:8000/api/notes';

  constructor(private http: HttpClient) {}

  getSelectedNote() {
    return this.selectedNote;
  }

  setSelectedNote(newNote: Note | null) {
    this.selectedNote = newNote;
  }

  // used in list component
  async getNotes() {
    return await lastValueFrom(this.http.get<Note[]>(this.notesUrl));
  }

  async addNote(newNote: Note) {
    return await lastValueFrom(this.http.post<Note>(this.notesUrl, newNote, httpOptions));
  }

  async updateIssue(id: number, modifiedNote: Note) {
    return await lastValueFrom(this.http.patch<Note>(`${this.notesUrl}/${id}`, modifiedNote, httpOptions));
  }

}
