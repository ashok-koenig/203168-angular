import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn: boolean = false
  constructor(private authService: AuthService, private router: Router){

  }
  handleLogin(role: string){
    this.authService.login(role)
    this.isLoggedIn = true;
    if(role == 'admin'){
      this.router.navigate(['/admin'])
    }
    if(role == 'user'){
      this.router.navigate(['/user'])
    }
  }
  handleLogout(){
    this.authService.logout();
    this.isLoggedIn = false
    this.router.navigate(['/home'])
  }
}
