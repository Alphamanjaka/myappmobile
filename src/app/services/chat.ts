import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor(private http: HttpClient) { }

  async ask(question: string): Promise<string> {
    const res: any = await this.http.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: question }],
      },
      {
        headers: {
          Authorization: `Bearer YOUR_API_KEY`,
        },
      }
    ).toPromise();

    return res.choices[0].message.content;
  }
  askTest(question: string): string {
    // Simule une réponse pour les tests
    const responses: { [key: string]: string } = {
      'Quelle est la capitale de la France ?': 'La capitale de la France est Paris.',
      'Quelles sont les meilleures destinations pour des vacances en famille ?': 'Les meilleures destinations pour des vacances en famille incluent Disneyland, la Côte d\'Azur, et les parcs nationaux.',
      'Propose-moi un voyage d aventure pas cher.': 'Je te propose un trek au Népal ou une randonnée en Patagonie pour une aventure inoubliable à petit prix.',
      'Je cherche une destination romantique pour une lune de miel.': 'Je te recommande les Maldives, Santorin en Grèce, ou Venise en Italie pour une lune de miel romantique.',
      'Quelles sont les formalités pour voyager au Japon ?': 'Pour voyager au Japon, tu auras besoin d\'un passeport valide et, selon ta nationalité, d\'un visa. Vérifie les exigences avant de partir.',
    };
    return responses[question] || 'Désolé, je n\'ai pas de réponse à cette question pour le moment.';
  }
}
