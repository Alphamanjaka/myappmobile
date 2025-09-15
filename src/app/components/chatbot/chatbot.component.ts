import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatService } from 'src/app/services/chat';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class ChatbotComponent {
  messages: string[] = [];
  userInput = '';

  constructor(private chatService: ChatService) { }

  async sendMessage() {
    if (!this.userInput.trim()) return;
    this.messages.push(`👤 ${this.userInput}`);
    const response = await this.chatService.ask(this.userInput);
    this.messages.push(`🤖 ${response}`);
    this.userInput = '';
  }
}
