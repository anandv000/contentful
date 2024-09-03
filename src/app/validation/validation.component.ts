import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formControlName } from './validation.model';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit{

  form!:FormGroup;
  formCtrName = formControlName;

  constructor() { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl('',[]),
      password: new FormControl('',[]),
      email: new FormControl('',[]),
      isChecked: new FormControl(false)
    })
  }

  onSubmit() {
    if(this.form.valid) {
      console.log('this form is Valid');
    } else {
      console.log('this form is Invalid');
    }
  } 

  onChecked(formControlName:string,event:any) {
    const control = this.form.get(formControlName)
    const check = (event.target as HTMLInputElement).checked;
    console.log(check);
    if(check) {
      if (formControlName === this.formCtrName.userName) {
        control?.setValidators([Validators.required,Validators.minLength(2),Validators.maxLength(15)]);
      } else if (formControlName === this.formCtrName.password) {
        control?.setValidators([Validators.required,Validators.minLength(8)]);
      } else if (formControlName === this.formCtrName.email) {
        control?.setValidators([Validators.required,Validators.email]);
      }
      control?.updateValueAndValidity();
    } else {
      control?.clearValidators();
      control?.updateValueAndValidity();
    }
  }

}
