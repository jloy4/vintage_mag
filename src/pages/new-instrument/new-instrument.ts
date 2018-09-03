import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Camera } from '@ionic-native/camera';
import firebase from 'firebase';
import 'firebase/firestore';

@IonicPage()
@Component({
  selector: 'page-new-instrument',
  templateUrl: 'new-instrument.html',
})

export class NewInstrumentPage {

	db: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera) {
  	this.db = firebase.firestore();
  }

  brand: String = "";
  model: String = "";
  color: String = "";
  year: any = 0;
  description: String = "";
  base64Images: any = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewInstrumentPage');
  }

  addInstrumentToCollection() {
  	// store data on database
  	this.db.collection("guitarCollection").add({
  		brand: this.brand,
  		model: this.model,
  		color: this.color,
  		year: this.year,
  		description: this.description,
  		pictures: this.base64Images
  	})
  	.then((data)=>{
  		console.log(data)
  	})
		.catch((error)=>{
			console.log(error)
		});

		this.navCtrl.push(HomePage);
  }

  accessGallery() {
  	this.camera.getPicture({
  		quality: 100,
    	sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    	destinationType: this.camera.DestinationType.DATA_URL,
    	allowEdit: false
    }).then((imageData) => {
      this.base64Images.push('data:image/jpeg;base64,' + imageData);
     }, (err) => {
      console.log(err);
    });
  }

}
