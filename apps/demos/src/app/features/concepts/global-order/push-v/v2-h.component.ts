import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'rxa-v2-h',
  template: `
    <rxa-visualizer>
      <div visualizerHeader>
        <h1>H<small>v2</small></h1>
      </div>
      <div class="row w-100"></div>
    </rxa-visualizer>
  `,
  host: { class: 'w-100' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class V2HComponent {
  constructor(public data: DataService) {}
}
