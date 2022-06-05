import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  public notes = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
