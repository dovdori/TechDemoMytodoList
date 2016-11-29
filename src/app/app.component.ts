import { Component } from '@angular/core';

@Component({
  selector: 'DD--Todolist--DD-root',
  template:
    `<h1>
  {{title === 'OPM' ? 'Hello' : 'Hi rock star'}}
</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works';
}
