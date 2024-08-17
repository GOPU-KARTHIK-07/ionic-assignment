import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Products', url: '/folder/products', icon: 'basket' ,requiresAuth:true},
    { title: 'Features', url: '/folder/features', icon: 'list',requiresAuth:true },
    { title: 'ContactUs', url: '/folder/contact-us', icon: 'call' ,requiresAuth:true},
    { title: 'AboutUs', url: '/folder/about-us', icon: 'information-circle',requiresAuth:true },
    { title: 'Spam', url: '/folder/spam', icon: 'warning',requiresAuth:true },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public isAuthenticated:boolean = false;
  constructor() {}
  updateAuthStatus(status: boolean) {
    this.isAuthenticated = status;
  }
}
