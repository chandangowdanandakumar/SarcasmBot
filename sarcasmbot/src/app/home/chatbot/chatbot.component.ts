import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  messages = [{
    "text":"Hi How are you?",
    "self":false
  },{
    "text":"I am fine",
    "self":true
  }]
  replyMessage = "";
  constructor(public dialogref: MatDialogRef<ChatbotComponent>) { }

  ngOnInit(): void {
 
  }
  reply(){
    this.messages.push({
      "text":this.replyMessage,
      "self":true
    })
    this.replyMessage = "";
  }


  closeChatbot(){
    this.dialogref.close()
  }

}
