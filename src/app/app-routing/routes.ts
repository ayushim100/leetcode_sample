import { NavComponent } from '../nav/nav.component';
import { CardsComponent } from '../cards/cards.component';
import { FormListComponent } from '../discuss/form-list/form-list.component';
import {QuestionDetailComponent} from '../question-detail/question-detail.component';
import { RouterModule, Routes } from '@angular/router';
import {SolutionComponent} from '../solution/solution.component';
import { DailyQuestionsComponent } from '../daily-questions/daily-questions.component';
export const routes: Routes = [
    { path: 'cards',  component: CardsComponent },
    { path: 'discuss',  component: FormListComponent },
    {path: 'cards/:id', component: QuestionDetailComponent},
    {path:'solution', component:SolutionComponent}, 
    {path:'daily-questions', component:DailyQuestionsComponent},
    {path:'user', loadChildren:()=> import('../user/user.module').then(m => m.UserModule)},
    { path: '', redirectTo: '/cards', pathMatch: 'full' }
  ];