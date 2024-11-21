import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.css'
})
export class ProfileDetailComponent {
  profileName: string = ''
  picUrl: string =''
  constructor(private route: ActivatedRoute){
    this.profileName = route.snapshot.params['name']
    this.picUrl = `images/${this.profileName}.jpg`
  }
}
