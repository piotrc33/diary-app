import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Note } from '../note';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  @Output() onSave = new EventEmitter<Note>()

  public id : number | null = null;
  public selectedNote : Note | null = null;

  public noteForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required]
    }
  )

  get title() { return this.noteForm.get('title'); }
  get text() { return this.noteForm.get('text'); }

  
  constructor(
    public noteService : NoteService,
    private fb : FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    ) { }
    
    ngOnInit(): void {
      this.id = +this.route.snapshot.paramMap.get('id')!;
      if(this.id)
      this.noteForm.patchValue(this.noteService.getSelectedNote()!);
      this.selectedNote = this.noteService.getSelectedNote();
    }
    
    // ngOnChange?
    async handleSubmit() {
      // if selected note isn't null
      // if(this.noteService.getSelectedNote()!.id) {
      //   // await this.noteService.updateNote(this.issue.id, issue);
      // }
      if(this.selectedNote !== null) {
        await this.noteService.updateIssue(this.selectedNote.id, this.noteForm.value);
        this.noteService.setSelectedNote(null);
        this.router.navigate(['/notes']);
      } else {
        const newNote = await this.noteService.addNote(this.noteForm.value);
        this.router.navigate(['/notes']);
      }
      

      // this.onSave.emit(this.noteForm.value);
    }

}
