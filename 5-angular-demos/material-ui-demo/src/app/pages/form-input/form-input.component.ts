import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [MatInputModule, FormsModule, MatRadioModule, MatSelectModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {
  firstName = ''
  lastName = ''
  email = ''
  message = ''
  gender = 'male'
  course =''
}
