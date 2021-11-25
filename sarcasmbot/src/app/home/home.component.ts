import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChatbotComponent } from './chatbot/chatbot.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  OpenChatbot(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "28%";
    dialogConfig.height="75%"
    this.dialog.open(ChatbotComponent,dialogConfig)
  }
}
