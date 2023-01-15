import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="text-center">
      <span class="title">{{ title }}</span>
      <p class="sub-title">{{ subtitle }}</p>
    </h1>
    <router-outlet></router-outlet>
    `,
  styles: [
    '.title { color: #b0c4de;}',
    '.sub-title { font-size: small; }'
  ],
})
export class AppComponent {
  title = 'Simple Todo';
  subtitle = 'Angular + Django Rest Framework + PostgreSql'
}
