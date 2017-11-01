import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = new FormGroup({
	 userName: new FormControl('', Validators.required),
	 firstName: new FormControl('', Validators.minLength(4)),
	 lastName: new FormControl('', Validators.maxLength(6)),
	 address: new FormGroup({
	   street: new FormControl(''),
	   city: new FormControl(''),
	   zipCode: new FormControl('')
	 })
	});

  constructor() { }

  ngOnInit() {

  	console.log(this.userForm.controls.userName);

  }

}
