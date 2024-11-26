import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-dialog-demo',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './dialog-demo.component.html',
  styleUrl: './dialog-demo.component.css'
})
export class DialogDemoComponent {
  dialog = inject(MatDialog)
  result: boolean | null = null

  openConfirmDialog(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {title: "Delete Confirmation", content: "Are you sure? Would you like to delete"}
    })
    dialogRef.afterClosed().subscribe(choice =>{
      this.result = choice
    })
  }
}
