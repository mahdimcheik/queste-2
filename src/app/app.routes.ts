import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
];
