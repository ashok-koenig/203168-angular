import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const tokenService = inject(TokenService)
  const allowedRoles: string[] = route.data['roles']
  if(!tokenService.isLoggedIn.value || !allowedRoles.includes(tokenService.getRole())){
    router.navigate(['/unauthorized'])
    return false;
  }
  return true;
};
