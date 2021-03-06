import { Component, Input } from '@angular/core';
import { FileStatus } from '../../../../interfaces/file';

@Component({
  selector: 'app-downloads-status',
  templateUrl: './downloads-status.component.html',
  styleUrls: ['./downloads-status.component.scss']
})
export class DownloadsStatusComponent {
  @Input() status: FileStatus = FileStatus.Unknown;

  constructor() { }
}
