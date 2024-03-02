import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../types';

@Component({
  selector: 'app-fromulaire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fromulaire.component.html',
  styleUrl: './fromulaire.component.css',
})
export class FromulaireComponent {
  onSubmit(myForm: any): void {
    console.log('submit');
    console.log(myForm['ng-valid']);
  }
  model: Order = new Order('', 0, new Date(), '');
}
