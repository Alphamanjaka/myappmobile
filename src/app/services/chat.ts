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
}
