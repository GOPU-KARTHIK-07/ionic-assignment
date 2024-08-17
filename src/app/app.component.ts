import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' ,requiresAuth:true},
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart',requiresAuth:true },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' ,requiresAuth:true},
    { title: 'Trash', url: '/folder/trash', icon: 'trash',requiresAuth:true },
    { title: 'Spam', url: '/folder/spam', icon: 'warning',requiresAuth:true },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public isAuthenticated:boolean = false;
  constructor() {}
  updateAuthStatus(status: boolean) {
    this.isAuthenticated = status;
  }
}
