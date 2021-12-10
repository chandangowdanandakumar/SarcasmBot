import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SarcasmbotService {
  url = 'https://26bf-34-82-25-73.ngrok.io'
  constructor(private http: HttpClient) { }

  getSarcasmBotReply(body:any){
    return this.http.post(this.url+'/reply',body)
  }
}
