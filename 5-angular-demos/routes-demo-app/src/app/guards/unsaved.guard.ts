import { CanDeactivateFn } from '@angular/router';

export const unsavedGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {

  if(component && component.contactForm && component.contactForm.dirty){
    const result = confirm('You have some unsaved form data, Are you sure to leave the form?')
    if(result){
      return true;
    }else{
      return false;
    }
  }
  return true;
};
