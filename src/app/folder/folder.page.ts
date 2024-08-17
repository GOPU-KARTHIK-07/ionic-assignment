// import { Component, inject, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-folder',
//   templateUrl: './folder.page.html',
//   styleUrls: ['./folder.page.scss'],
// })
// export class FolderPage implements OnInit {
//   public folder!: string;
//   private activatedRoute = inject(ActivatedRoute);
//   constructor() {}

//   ngOnInit() {
//     this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
//   }
// }
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
  public folder: string=" ";
  public username: string='';
  public password: string='';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private appComponent: AppComponent
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id')?? '';
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
      this.router.navigate(['/folder/outbox']);
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
