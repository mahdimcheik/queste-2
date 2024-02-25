import { Component } from '@angular/core';
import { BlockComponent } from './block/block.component';

@Component({
  selector: 'app-root',
  imports: [BlockComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
}
