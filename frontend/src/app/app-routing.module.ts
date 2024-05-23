import { AppComponent } from './app.component';
import { ComicFormComponent } from './comic-form/comic-form.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicWelcomeComponent } from './comic-welcome/comic-welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'list', component: ComicListComponent },
  { path: 'form', component: ComicFormComponent },
  { path: 'welcome', component: ComicWelcomeComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
