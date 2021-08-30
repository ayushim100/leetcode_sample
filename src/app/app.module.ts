import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardsComponent } from './cards/cards.component';
import { DiscussComponent } from './discuss/discuss.component';
import { FormListComponent } from './discuss/form-list/form-list.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

import {FormService} from './discuss/shared/form.service';
import { QuestionService } from './discuss/shared/question.service';
import {AuthService} from './user/auth.service';

import { baseURL } from './shared/baseurl';
import { SolutionComponent } from './solution/solution.component';
import { DailyQuestionsComponent } from './daily-questions/daily-questions.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { IconsProviderModule } from './icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardsComponent,
    DiscussComponent,
    FormListComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    SolutionComponent,
    DailyQuestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    ToastrModule.forRoot(),
    IconsProviderModule,
    NzMenuModule
  ],
  providers: [
    FormService,
    QuestionService,
    AuthService,
    {provide: 'BaseURL', useValue: baseURL},
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
