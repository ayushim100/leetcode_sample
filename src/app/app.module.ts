import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardsComponent } from './cards/cards.component';
import { DiscussComponent } from './discuss/discuss.component';

import { FormsModule }   from '@angular/forms';
import { FormListComponent } from './discuss/form-list/form-list.component';
import {FormService} from './discuss/shared/form.service';
import { QuestionListComponent } from './question-list/question-list.component'
import { QuestionService } from './discuss/shared/question.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardsComponent,
    DiscussComponent,
    FormListComponent,
    QuestionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FormService,
    QuestionService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
