import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { sendOutline } from 'ionicons/icons';
import { ChatService } from 'src/app/services/chat';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class ChatbotComponent implements OnInit {
  messages: string[] = [];
  userInput = '';
  suggestedQuestions = [
    'Quelles sont les meilleures destinations pour des vacances en famille ?',
    'Propose-moi un voyage d aventure pas cher.',
    'Je cherche une destination romantique pour une lune de miel.',
    'Quelles sont les formalités pour voyager au Japon ?'
  ];

  constructor(private chatService: ChatService) { }
  ngOnInit(): void {
    addIcons({
      sendOutline
    })
  }

  async sendMessage() {
    if (!this.userInput.trim()) return;
    this.messages.push(`👤 ${this.userInput}`);
    const response = await this.chatService.askTest(this.userInput);
    this.messages.push(`🤖 ${response}`);
    this.userInput = '';
  }

  sendSuggestedQuestion(question: string) {
    this.userInput = question;
    this.sendMessage();
  }
}
