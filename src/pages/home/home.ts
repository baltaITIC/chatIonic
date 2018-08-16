import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username : string;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
  
    ionViewDidLoad() {
      console.log(this.navParams.data);
    }

    goToChat(){
      this.navCtrl.setRoot(ChatPage,
        {
          data: this.username
        });
    }

}
