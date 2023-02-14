import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';

const routes: Routes = [
  {path:'', redirectTo:'wellcome', pathMatch:"full"},
  {path:"wellcome", component:WellcomeComponent},
  {path:"question", component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
