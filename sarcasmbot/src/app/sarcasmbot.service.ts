import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SarcasmbotService {
  constructor(private http: HttpClient) { }

  getSarcasmBotReply(body:any){
    return this.http.post('https://fe5e-34-83-54-174.ngrok.io/reply/',body)
  }
}
