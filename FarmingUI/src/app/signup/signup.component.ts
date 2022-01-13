import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsermasterService } from '../services/usermaster.service';
import { SignUpVm } from '../shared/models/SignUpVm';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username?: string;
  userpassword?:string;

  constructor(public usermasterService:UsermasterService,public router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  SignUp(){
  let SignUpDetails:SignUpVm={email:this.username,password:this.userpassword};
  
  }
}
