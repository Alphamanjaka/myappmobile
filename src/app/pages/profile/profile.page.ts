import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/travel.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ProfilePage implements OnInit {

  public profileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.userService.getUserProfile().subscribe(user => {
      this.profileForm.patchValue(user);
    });
  }

  saveProfile() {
    if (this.profileForm.valid) {
      this.userService.updateUserProfile(this.profileForm.value as User).subscribe(updatedUser => {
        console.log('Profile updated:', updatedUser);
        // Add toast notification here later
      });
    }
  }
}
