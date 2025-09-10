import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../interfaces/travel.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = {
    id: 1,
    username: 'johndoe',
    email: 'john.doe@example.com',
  };

  constructor() { }

  getUserProfile() {
    return of(this.user);
  }

  updateUserProfile(profile: User) {
    this.user = profile;
    return of(this.user);
  }
}
