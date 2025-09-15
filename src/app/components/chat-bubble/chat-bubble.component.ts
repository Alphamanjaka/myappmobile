import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ChatbotComponent } from '../chatbot/chatbot.component';
import { addIcons } from 'ionicons';
import { chatbubbleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  standalone: true,
  imports: [IonicModule, ChatbotComponent],
})
export class ChatBubbleComponent implements OnInit {

  isOpen = false;

  toggleChat() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {
    addIcons({
      chatbubbleOutline,
      });
  }
}
