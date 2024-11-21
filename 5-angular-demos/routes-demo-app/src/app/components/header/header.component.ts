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
  userRole: string = ''
  constructor(private authService: AuthService, private router: Router){
    this.isLoggedIn = authService.isLoggedIn;
    this.userRole = authService.userRole
  }
  handleLogin(role: string){
    this.authService.login(role)
    this.isLoggedIn = this.authService.isLoggedIn;
    this.userRole = this.authService.userRole
    if(role == 'admin'){
      this.router.navigate(['/admin'])
    }
    if(role == 'user'){
      this.router.navigate(['/user'])
    }
  }
  handleLogout(){
    this.authService.logout();
    this.isLoggedIn = this.authService.isLoggedIn;
    this.userRole = this.authService.userRole
    this.router.navigate(['/home'])
  }
}
