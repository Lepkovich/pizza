import { Component } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public cartService: CartService, private authService: AuthService) {
  }

  login() {
    this.authService.logIn();
  };

  logout() {
    this.authService.logOut();
  }
}
