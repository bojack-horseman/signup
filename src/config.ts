import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyDH0yEaSTk_FK6YcgNC5DlXNb8ArB5EqqA",
    authDomain: "sample-signup.firebaseapp.com",
    databaseURL: "https://sample-signup.firebaseio.com",
    projectId: "sample-signup",
    storageBucket: "sample-signup.appspot.com",
    messagingSenderId: "357548729581"
	}
};
