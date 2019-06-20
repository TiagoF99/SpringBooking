import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular2';

  that() {
  	new that();
  }

  /**
  * all the code below here needed to make a form
  */
  public submitted: boolean;
  roomsearch: FormGroup;


  rooms:Room[];

  ngOnInit() {
  	this.roomsearch = new FormGroup({
  		checkin: new FormControl(""),
  		checkout: new FormControl("")
  	});
  	this.rooms = ROOMS;
  }

  onSubmit({value, valid}: {value: Roomsearch, valid:boolean}) {
  	console.log(value);
  }
}

export interface Roomsearch {
	checkin:String;
	checkout:String;
}

/**
*below here is what is needed to make a room list
*also in code do as an example to access it:
* 	<div *ngFor="let room of rooms">
*  		<div>{{room.price}}</div>
*	</div>
*/
export interface Room {
	id:string;
	roomNumber:string;
	price:string;
	links:string;
}
var ROOMS:Room[] = [
	{
		"id":"1",
		"roomNumber":"411",
		"price":"28",
		"links": ""
	},{
		"id":"2",
		"roomNumber":"412",
		"price":"30",
		"links": ""
	}
]