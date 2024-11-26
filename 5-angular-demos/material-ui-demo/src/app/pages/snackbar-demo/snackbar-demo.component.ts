import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-demo',
  standalone: true,
  imports: [MatSnackBarModule, MatButtonModule],
  templateUrl: './snackbar-demo.component.html',
  styleUrl: './snackbar-demo.component.css'
})
export class SnackbarDemoComponent {
  snackBar = inject(MatSnackBar)
  openSnackbar(){
    this.snackBar.open('This is simple snack bar message', 'Ok', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
