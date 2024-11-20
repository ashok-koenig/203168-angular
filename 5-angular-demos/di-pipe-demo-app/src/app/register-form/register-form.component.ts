import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
formData= {
  firstName:'No Name'
}
  handleSubmit(data: NgForm){
    console.log(data);    
  }
}
