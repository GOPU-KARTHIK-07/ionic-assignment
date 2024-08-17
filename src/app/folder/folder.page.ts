import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string = '';
  public username: string = '';
  public password: string = '';
  public cards: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private appComponent: AppComponent
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
    
    for (let i = 1; i <= 20; i++) {
      const randomImageId = Math.floor(Math.random() * 1000) + 1; 
      this.cards.push({
        title: `Card Title ${i}`,
        subtitle: `Card Subtitle ${i}`,
        content: `Here's a small text description for the card content. Nothing more, nothing less.`,
        img: `https://picsum.photos/id/${randomImageId}/200/300`
      });
    }
  }

  async login() {
    if (this.username === 'karthik' && this.password === 'karth@123') {
      this.appComponent.updateAuthStatus(true);
      const alert = await this.alertController.create({
        header: 'Login Successful',
        message: 'You have been logged in successfully.',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/folder/products']);
    } else {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Invalid username or password.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
