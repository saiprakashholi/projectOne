import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MySideNavComponent } from './materialComponents/my-side-nav/my-side-nav.component';

const routes: Routes = [
  
  { path: '', component: MySideNavComponent,
  children: [
    {path: '', component: WelcomeComponent},
    { path: 'frndsList', component: FriendsListComponent},
    { path: 'contacts', component: ContactsComponent}
  ]    
},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
