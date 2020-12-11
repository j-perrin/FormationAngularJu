import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ControlService implements CanActivate{

  constructor(private router: Router) { }

  // call in app-routing.module.ts, give access to certain routes
  canActivate(): boolean {
    //if(localStorage.userConnected === 'true'){
    if(localStorage.id){
      return true;
    }
    this.router.navigate(['/home']);
    return false;

  }
}
