import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@ngbracket/ngx-layout'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FlexLayoutModule, MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })
  error: string = ''
  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router){
    if(tokenService.isLoggedIn.value){
      router.navigate(['/blogs'])
    }
  }
  handleSubmit(){
    this.error =''
    const email = this.myForm.value.email
    const password = this.myForm.value.password
    if(email && password){
      this.authService.login({email, password}).subscribe({
        next: (response)=>{
          if(response && response.token){
            this.router.navigate(['/blogs'])
          }
        },
        error:(error)=>{
          this.error = error.message
        }
      })
    }
    
  }
}
