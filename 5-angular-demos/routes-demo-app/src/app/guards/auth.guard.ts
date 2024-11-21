import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router)
  const authService: AuthService = inject(AuthService)
  const allowedRoles: string[] = route.data['roles']
  if(!authService.isLoggedIn || !allowedRoles.includes(authService.userRole)){
    router.navigate(['/unauthorized']);
    return false;
  }
  return true;
};
