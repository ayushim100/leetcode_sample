import { NavComponent } from '../nav/nav.component';
import { CardsComponent } from '../cards/cards.component';
import { DiscussComponent } from '../discuss/discuss.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'cards',  component: CardsComponent },
    { path: 'discuss',     component: DiscussComponent },
    { path: '', redirectTo: '/cards', pathMatch: 'full' }
  ];