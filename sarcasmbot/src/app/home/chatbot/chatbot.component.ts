import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SarcasmbotService } from 'src/app/sarcasmbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  userinput = new FormControl('');
  allmessages: { message: string, from: string }[] = [
    { "message": "Hi, Welcome to Sarcasm Bot", "from": "Bot" }]

  replyMessage = "";
  constructor(public dialogref: MatDialogRef<ChatbotComponent>, public botservice: SarcasmbotService) { }

  ngOnInit(): void {
  }

  send() {
    console.log(this.userinput.value)
    this.allmessages.push({ "message": this.userinput.value, "from": "user" })
    const body = {
      "texts": this.userinput.value
    }
    this.botservice.getSarcasmBotReply(body).subscribe((data: any) => {
      this.allmessages.push({ "message": data.result, "from": "Bot" })
    })
    this.userinput.reset()
  }

  closeChatbot() {
    this.dialogref.close()
  }

}
