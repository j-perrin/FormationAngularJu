import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // trouvé dans index.html, redirige vers app.component.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
}
