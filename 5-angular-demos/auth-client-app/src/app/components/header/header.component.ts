import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userRole: string =''
  isLoggedIn: boolean = false
  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService){
    tokenService.isLoggedIn.subscribe((value)=>{
      this.isLoggedIn = value
    })
    tokenService.userRole.subscribe((value)=>{
      this.userRole = value
    })

  }
  handleLogout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
