import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'rxa-v4-c',
  template: `
    <rxa-visualizer>
      <div visualizerHeader>
        <h1>C<small>v4</small></h1>
      </div>
      <div class=" w-100">
        <div class="row">
          <rxa-value-display
            *rxLet="data.count$; let count"
            class="col"
            [value]="count"
          ></rxa-value-display>
        </div>
        <div class="row">
          <div class="col">
            <rxa-v4-e> </rxa-v4-e>
          </div>
          <div class="col">
            <rxa-v4-f> </rxa-v4-f>
          </div>
        </div>
      </div>
    </rxa-visualizer>
  `,
  host: { class: 'w-100' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class V4CComponent {
  constructor(public data: DataService) {}
}
