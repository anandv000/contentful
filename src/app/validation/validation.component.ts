import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formControlName } from './validation.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit{

  form!:FormGroup;
  formCtrName = formControlName;
  errorMessageUserName: string ='';
  errorMessagePassword: string ='';
  errorMessageEmail: string ='';

  constructor(private toastr: ToastrService) { }
  
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
      this.toastr.success('this form was submit successfully!');
      console.log('this form was submit successfully.');
    } else {
      this.toastr.error('this form is Invalid!');
      console.log('this form is Invalid.');
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

  validation(formControlName:string) {
    const control = this.form.get(formControlName)
    if (formControlName === this.formCtrName.userName) {
    if(control?.invalid) {
      this.errorMessageUserName = `${formControlName} is invalid.`
    } else {
      this.errorMessageUserName = '';
    }
  }
  if (formControlName === this.formCtrName.password) {
    if(control?.invalid) {
      this.errorMessagePassword = `${formControlName} is invalid.`
    } else {
      this.errorMessagePassword = '';
    }
  }
  if (formControlName === this.formCtrName.email) {
    if(control?.invalid) {
      this.errorMessageEmail = `${formControlName} is invalid.`
    } else {
      this.errorMessageEmail = '';
    }
  }
  }

}
