import { Component } from '@angular/core';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    BlockComponent,
    UserProfileComponent,
    FormsModule,
    ListComponent,
    RouterOutlet,
    RouterLink,
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
