import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <h4>h4. Bootstrap heading <small>Secondary text</small></h4>
    <span>Example of inline code: <code>&lt;section&gt;</code>.</span>
    <br />
    <pre>

Example of multiple lines of code.
This should appear as a new line.
    </pre
    >
  `,
  styles: [],
})
export class MyLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
