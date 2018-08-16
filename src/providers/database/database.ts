import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from '../../../node_modules/rxjs';
import { Msg } from '../../models/msg';

@Injectable()
export class DatabaseProvider {

  constructor(private db: AngularFirestore) {
    console.log('Hello DatabaseProvider Provider');
  }

  sendMsgs(msg : Msg){
    var id = new Date().toISOString() + this.db.createId();
    this.db.doc('messages/'+id).set(msg);

  }

  getMsgs() : Observable<Array<Msg>>{
    return this.db.collection<Msg>('messages').valueChanges();
  }
}
