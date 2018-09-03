import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewInstrumentPage } from '../new-instrument/new-instrument';
import firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	db: any;
	collection: any = [];

  constructor(public navCtrl: NavController) {
  	// fetch database data
  	this.db = firebase.firestore();
  	// this.db.collection('guitarCollection').get()
	  // 		.then(snapshot => {
	  // 			snapshot.forEach(doc => {
	  // 				this.collection.push(doc.data());
	  // 			});
	  // 		})
	  // 		.catch(err => {
	  // 			console.log("Error getting data", err);
	  // 		});

  	console.log(this.collection);
  }

  addNewInstrument() {
  	this.navCtrl.push(NewInstrumentPage);
  }
}