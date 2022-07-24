import { Component } from '@angular/core';
import { ChatbotService } from './services/chatbot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private chatbotService: ChatbotService) {}

  crearChatbot() {
    this.chatbotService.crearChatbot().subscribe((data) => {
      console.log(data);
    });
    
  }

  borrarChatbot() {

    console.log('entro aquu');
    this.chatbotService.borrarChatbot().subscribe((data) => {
      console.log(data);
    })
  }
  
}
