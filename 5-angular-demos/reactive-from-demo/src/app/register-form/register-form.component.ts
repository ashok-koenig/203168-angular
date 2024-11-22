import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    lastName: new FormControl('', [Validators.required])
  })
  get firstName(): FormControl{
    return this.registerForm.get('firstName') as FormControl
  }
  get lastName(): FormControl{
    return this.registerForm.get('lastName') as FormControl
  }
  handleSumit(){
    console.log(this.registerForm);    
  }
}
