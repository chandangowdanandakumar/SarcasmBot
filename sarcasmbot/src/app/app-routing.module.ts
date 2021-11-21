import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './docs/docs.component';
import { ChatbotComponent } from './home/chatbot/chatbot.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomeComponent, children: [{ path: "chatbot", component: ChatbotComponent }] },
  { path: 'docs', component: DocsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
