import { NavComponent } from '../nav/nav.component';
import { CardsComponent } from '../cards/cards.component';
import { FormListComponent } from '../discuss/form-list/form-list.component';
import {QuestionDetailComponent} from '../question-detail/question-detail.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'cards',  component: CardsComponent },
    { path: 'discuss',  component: FormListComponent },
    {path: 'cards/:id', component: QuestionDetailComponent},
    { path: '', redirectTo: '/cards', pathMatch: 'full' }
  ];