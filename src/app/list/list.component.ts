import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  myList: Array<{ id: number; name: string }> = [
    { id: 1, name: 'Pomme' },
    { id: 2, name: 'Banane' },
    { id: 3, name: 'Orange' },
  ];
}
