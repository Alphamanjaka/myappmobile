import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from '../chatbot/chatbot.component';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, ChatbotComponent],
})
export class ChatBubbleComponent {
  isOpen = false;

  toggleChat() {
    this.isOpen = !this.isOpen;
  }
}
