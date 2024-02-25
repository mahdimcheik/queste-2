import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../types';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  random: string = '';
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
  handleChange(val: string) {
    this.random = val;
  }
}
