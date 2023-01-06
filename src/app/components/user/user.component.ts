import { userInterface } from '@models/users.interface';
import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '@app/app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input('user') user: userInterface | undefined;

  constructor(public appComponent: AppComponent) {}

  ngOnInit(): void {}

  getProfileInfo() {
    if (this.user) {
      console.log(
        '🚀 ~ file: user.component.ts:19 ~ UserComponent ~ getProfileInfo ~ this.user',
        this.user
      );
      if (this.user.nombres && this.user.apellidos)
        return this.user.nombres, this.user.apellidos;
      else if (this.user.nombres && !this.user.apellidos)
        return this.user.nombres;
      else if (!this.user.nombres && this.user.apellidos)
        return this.user.apellidos;
      else if (!this.user.nombres && !this.user.apellidos)
        return this.user.numeroTelefono;
    }

    return 'Anónimo';
  }
}