import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'rxa-push-overview',
  template: `
    <h1>ChangeDetection Overview</h1>
    <div class="push-cases"></div>
  `,
  changeDetection: environment.changeDetection,
  styles: [
    `
      .push-cases {
        display: flex;
        flex-wrap: wrap;
      }

      .item {
        width: 50%;
      }
    `,
  ],
  standalone: false,
})
export class RxStateOverviewComponent {}
