import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UserProfile } from '../interfaces/travel.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserProfile = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  };

  constructor() { }

  getUserProfile() {
    return of(this.user);
  }

  updateUserProfile(profile: UserProfile) {
    this.user = profile;
    return of(this.user);
  }
}
