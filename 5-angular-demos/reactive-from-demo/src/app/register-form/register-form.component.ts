import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email], [emailTaken]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), cannotContainSpace]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl('',[ Validators.required]),
      pinCode: new FormControl('',[Validators.required])
    })
  })
  get firstName(): FormControl{
    return this.registerForm.get('firstName') as FormControl
  }
  get lastName(): FormControl{
    return this.registerForm.get('lastName') as FormControl
  }
  get email(): FormControl{
    return this.registerForm.get('email') as FormControl
  }
  get password(): FormControl{
    return this.registerForm.get('password') as FormControl
  }
  get city(): FormControl{
    return this.registerForm.get('address')?.get('city') as FormControl
  }
  get pinCode(): FormControl{
    return this.registerForm.get('address')?.get('pinCode') as FormControl
  }

  handleSumit(){
    console.log(this.registerForm.value);    
  }
}

// Custom Validations
function cannotContainSpace(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value
  if(value.indexOf(' ')>0){
    return {cannotContainSpace: true}
  }
  return null
}

const taken_emails = ['test@email.com', 'user@email.com']
function emailTaken (control: AbstractControl): Promise<ValidationErrors | null> {
  const email = control.value
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(taken_emails.includes(email)){
        resolve({emailTaken: true})
      }else{
        resolve(null)
      }
    }, 2000)
  })
}
