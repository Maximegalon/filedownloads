import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilesService } from '../../services/files.service';
import { File } from '../../interfaces/file';
import { MultiCheckboxState } from '../checkbox/checkbox.model';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnDestroy, OnInit {
  filesService: FilesService;
  files: File[] = [];
  subscriptions: Subscription[] = [];
  selectedFiles: File[] = [];
  fileSubscription: Subscription = new Subscription;
  showModal: boolean = false;

  constructor(filesService: FilesService) {
    this.filesService = filesService;
  }

  ngOnInit(): void {
    this.fileSubscription = this.filesService.getFiles().subscribe(response => {
      this.files = response;
    })

    this.subscriptions.push(this.fileSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Fires when multistatte checkbox is clicked
   *
   * @returns {void}
   * @memberof DownloadsComponent
   */
  handleSelectionClick(e: MultiCheckboxState): void {
    if (e === MultiCheckboxState.Empty || e === MultiCheckboxState.Partial) {
      this.selectedFiles = this.files;
    } else {
      this.selectedFiles = [];
    }
  }

  /**
   * Fires when clicking to display the modal dialog
   *
   * @returns {void}
   * @memberof DownloadsComponent
   */
  handleDialogDisplay(display: boolean): void {
    this.showModal = display;
  }

  /**
   * The row selection state of the table
   *
   * @returns {MultiCheckboxState}
   * @memberof DownloadsComponent
   */
  get tableState(): MultiCheckboxState {
    if (this.selectedFiles.length === 0) {
      return MultiCheckboxState.Empty;
    }

    if (this.selectedFiles.length === this.files.length) {
      return MultiCheckboxState.Full;
    }

    return MultiCheckboxState.Partial;
  }

  /**
   * The number of row currently selected
   *
   * @returns {number}
   * @memberof DownloadsComponent
   */
  get selectedRowCount(): number {
    return this.selectedFiles.length;
  }
}
