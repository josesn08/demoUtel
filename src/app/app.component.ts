import { LoginService } from './../../../../joseDemoUtel/dogtorpet/src/app/services/login.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  title = 'DogtorPET';

  constructor (public loginSvc:LoginService ) { }

  public cerrarSesion():void{
    this.loginSvc.logout();
  }
}
