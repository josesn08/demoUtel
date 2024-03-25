import { Router } from '@angular/router';
import { routes } from './../app.routes';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Usuario } from '../models/usuario';
import { usuariosPrueba } from '../util/datos-prueba';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //TODO: Implementar el URL del servidor (backend)

  constructor( private router:Router) { }

  public login( credenciales:{username:string, password:string}): Observable<Usuario> {
    // TODO: Implementar el login a través del backend
    const result = usuariosPrueba.filter( u => u.username == credenciales.username )[0];
    if(result && result.password == credenciales.password) {
      localStorage.setItem('usuario-actual', credenciales.username);
      return of(result);
    }
    return throwError(() => new Error('Credenciales Incorrectas'))

  }

  public logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  public usuarioActual(): string | null {
    return localStorage.getItem('usuario-actual');
  }

  public loggedIn(): boolean {
    return !!this.usuarioActual();
  }

}
