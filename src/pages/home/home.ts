import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  commentsBayern = 2585;
  commentsJuan = 7;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }


  commentPhoto(lugar:string) {
    let prompt = this.alertCtrl.create({
      title: 'Comentar foto',
      message: "Ingresa tu comentario",
      inputs: [
        {
          name: 'title',
          placeholder: '...'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Comentar',
          handler: data => {
            if(lugar=='juan'){
              this.commentsJuan++;
            }else{
              this.commentsBayern++;
            }
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  likes() {
    let alert = this.alertCtrl.create({
      title: 'Tiene 12 Me gusta',
      subTitle: 'Tu foto tiene 12 me gusta',
      buttons: ['OK']
    });
    alert.present();


  }


  download() {
    let alert = this.alertCtrl.create({
      title: 'Download',
      subTitle: 'Se ha descargado la foto',
      buttons: ['OK']
    });
    alert.present();

    
  }
}
