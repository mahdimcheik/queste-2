import { Component } from '@angular/core';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  imports: [BlockComponent, UserProfileComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
}
