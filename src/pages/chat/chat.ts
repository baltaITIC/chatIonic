import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Msg } from '../../models/msg';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  msg : Msg;
  msgs : Array<Msg> = [];
    constructor(
      public navCtrl: NavController,
      private _dbProv: DatabaseProvider,
      private alertCtrl: AlertController,
      private navParams : NavParams
      ) {
      
        this.getMsgs();
    }

    ionViewWillLoad() {
      console.log(this.navParams.data);
      this.msg = {
        user: this.navParams.get('data'), 
        msg: "" ,
        date: ""
      };
      this.notifications(this.msg.user, "Welcome!!");
    }
  
    sendMsg(){
      try{
        if (this.msg.msg === ""){
          this.notifications("Can't send empty messages", "Write a message");
        }
        else{
          this.msg.date = new Date().toLocaleString();
          this._dbProv.sendMsgs(this.msg);
          this.msg.msg="";
          this.msg.date = "";
        }
      }catch(error){
        this.notifications(error, "Something went wrong");
      }
    }
  
    getMsgs(){
      this._dbProv.getMsgs().subscribe(
        x => {
          this.msgs = x;
          console.log(this.msgs);
        },
        (error) =>{
          this.notifications(error, "Something went wrong");
        }
      );
    }
  
    
    msgComplete(m : Msg) {
      let alert = this.alertCtrl.create({
        title: 'Message Information',
        message: "<h2>"+m.user+"</h2><br/><h5>"+m.msg+"</h5><br/>"+m.date,
        buttons: [        
          {
            text: 'Ok',
            handler: () => {
              console.log('Ok clicked');
            }
          }
        ]
      });
      alert.present();
    }
  

    notifications(m : string, title : string) {
      let alert = this.alertCtrl.create({
        title: title,
        message: "<h5>"+m+"</h5>",
        buttons: [        
          {
            text: 'Ok',
            handler: () => {
              console.log('Ok clicked');
            }
          }
        ]
      });
      alert.present();
    }
  
}
