import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'rxa-v4-d',
  template: `
    <rxa-visualizer>
      <div visualizerHeader>
        <h1>D<small>v4</small></h1>
      </div>
    </rxa-visualizer>
  `,
  host: { class: 'w-100' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class V4DComponent {
  constructor() {}
}
