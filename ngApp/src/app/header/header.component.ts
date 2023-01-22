import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	title = 'Simple Todo';
	subtitle = 'Angular + Django Rest Framework + PostgreSql'
}
