import { Component } from '@angular/core';
import { User } from '../types';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  user: User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };
  mustShow: boolean = false;
  showContent(): void {
    console.log('triggered');
    this.mustShow = !this.mustShow;
  }
}
