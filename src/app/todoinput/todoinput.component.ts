import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dd-to-do-list-dd-todoinput',
  template: `
    <p>
      DD---todoinput---DD Works!{{ name}}
    </p>
  `,
  styleUrls: ['./todoinput.component.css']
})
export class TODOinputComponent implements OnInit {
  name:string = 'OPM';

  constructor() { }

  ngOnInit() {
  }

}
